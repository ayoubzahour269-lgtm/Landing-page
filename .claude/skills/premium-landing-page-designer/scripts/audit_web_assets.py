#!/usr/bin/env python3
"""Report large web media files that may hurt landing-page performance."""

from __future__ import annotations

import argparse
from pathlib import Path
from typing import Iterable

IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif", ".svg"}
VIDEO_EXTENSIONS = {".mp4", ".webm", ".mov", ".m4v"}
MODEL_EXTENSIONS = {".glb", ".gltf", ".bin", ".hdr", ".exr"}
SKIP_DIRS = {"node_modules", ".git", ".next", "dist", "build", "coverage", ".cache"}


def iter_media(root: Path) -> Iterable[Path]:
    for path in root.rglob("*"):
        if not path.is_file():
            continue
        if any(part in SKIP_DIRS for part in path.parts):
            continue
        extension = path.suffix.lower()
        if extension in IMAGE_EXTENSIONS | VIDEO_EXTENSIONS | MODEL_EXTENSIONS:
            yield path


def threshold_for(path: Path, image_limit: int, video_limit: int, model_limit: int) -> int:
    extension = path.suffix.lower()
    if extension in VIDEO_EXTENSIONS:
        return video_limit
    if extension in MODEL_EXTENSIONS:
        return model_limit
    return image_limit


def format_size(size: int) -> str:
    units = ["B", "KB", "MB", "GB"]
    value = float(size)
    for unit in units:
        if value < 1024 or unit == units[-1]:
            return f"{value:.1f} {unit}"
        value /= 1024
    return f"{size} B"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", nargs="?", default=".", help="Project directory to inspect")
    parser.add_argument("--image-kb", type=int, default=700, help="Warn above this image size")
    parser.add_argument("--video-mb", type=int, default=5, help="Warn above this video size")
    parser.add_argument("--model-mb", type=int, default=4, help="Warn above this 3D asset size")
    args = parser.parse_args()

    root = Path(args.root).expanduser().resolve()
    if not root.exists() or not root.is_dir():
        parser.error(f"Not a directory: {root}")

    limits = {
        "image": args.image_kb * 1024,
        "video": args.video_mb * 1024 * 1024,
        "model": args.model_mb * 1024 * 1024,
    }

    files = sorted(iter_media(root), key=lambda item: item.stat().st_size, reverse=True)
    warnings: list[tuple[Path, int, int]] = []

    for path in files:
        size = path.stat().st_size
        limit = threshold_for(path, limits["image"], limits["video"], limits["model"])
        if size > limit:
            warnings.append((path, size, limit))

    print(f"Scanned {len(files)} media files in {root}")
    if not warnings:
        print("No media file exceeds the configured warning thresholds.")
        return 0

    print(f"Found {len(warnings)} potentially heavy assets:\n")
    for path, size, limit in warnings:
        relative = path.relative_to(root)
        print(f"- {relative}: {format_size(size)} (warning threshold {format_size(limit)})")

    print("\nReview actual rendered dimensions, compression, lazy loading, and mobile alternatives.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
