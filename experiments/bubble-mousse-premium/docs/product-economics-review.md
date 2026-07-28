# Product Economics Sheet — Review (2026-07-27)

Audit of the COD unit-economics sheet (7 SKUs, KSA market).
Source: Google Sheets, tab `gid=1306951687`.

## What checks out

- **NDR = CR × DR** is exact on every row that has all three values. ✓
- **COD = ASP + 28 SAR** on every row — the 28 SAR shipping/COD fee is applied consistently. ✓

## Issues found

### 1. CPA breakeven column is inconsistent (main finding)

The column appears intended as: breakeven ad cost per lead = `PROFIT after VAT × NDR ÷ (SAR/USD)`.
Back-solving the exchange rate each row implies:

| SKU | Product | Sheet CPA be ($) | Implied SAR/USD | Correct @ 3.75 peg |
|---|---|---:|---:|---:|
| SA04010800INDINW50 | Indian hair oil 1L | 4.2 | 4.75 | **5.32** |
| SA04050100M300 | Mashat red oil ×3 | 5.0 | 4.88 | **6.50** |
| SA04030400BUMO | Bubble Mousse shampoo ×2 | 6.0 | 5.33 | **8.53** |
| SA04011LACNEW00099 | Rotating hair brush | 4.8 | 4.78 | **6.12** |
| SA040107MSDR99DM | Knee brace | 5.4 | 5.12 | **7.37** |
| SA04050700BCOF00 | Antioxidant coffee ×2 | 4.3 | 3.78 | **4.33** |

Six rows use six different implied rates (3.78–5.33), so the column was hand-entered
rather than formula-driven. If the ~25–40% haircut on most rows is a deliberate
buffer (ad-account fees, payment/agency markup on USD spend), it should be one
explicit factor applied to all rows — the coffee row currently gets no buffer at all,
which overstates its headroom relative to the others.

### 2. Incomplete row

`SA04050400BUMO00KAR` (الباقة السحرية bundle) is missing **PROFIT after VAT, CR and DR**,
yet has NDR = 30% and CPA breakeven = 4.5 filled in. Those two values can't be derived
from what's on the row — either fill in the missing inputs or clear the outputs.

### 3. PROFIT after VAT is not derivable from the sheet's own columns

No combination of Selling / profit / ASP / COD reproduces the PROFIT-after-VAT values
(e.g. Indian oil: ASP/1.15 − implied cost 100 = 47.8, sheet says 64). The inputs it's
computed from (COGS, last-mile fee, return cost) live outside the sheet, so the column
can't be audited or kept in sync. Worth adding those as explicit columns.

## Ranking by realized profit per lead (PAV × NDR)

This is the number that actually caps your CPA:

| Rank | Product | SAR/lead | Breakeven CPA @ 3.75 |
|---|---|---:|---:|
| 1 | Bubble Mousse shampoo ×2 | 32.0 | $8.53 |
| 2 | Knee brace | 27.7 | $7.37 |
| 3 | Mashat red oil ×3 | 24.4 | $6.50 |
| 4 | Rotating hair brush | 22.9 | $6.12 |
| 5 | Indian hair oil 1L | 20.0 | $5.32 |
| 6 | Antioxidant coffee ×2 | 16.2 | $4.33 |

- **Bubble Mousse shampoo** is the strongest SKU: best NDR (42.1%) *and* best profit
  after VAT (76 SAR) — it can absorb roughly double the CPA the coffee can.
- **Antioxidant coffee** is the weakest despite the highest ASP (197): worst CR (65%),
  weak DR (45%), and only 56 SAR profit after VAT. Its sheet breakeven (4.3) sits right
  at the true 3.75-peg value with zero buffer — highest-risk product to scale.
- The knee brace's 83.1% CR is the best in the catalog; its constraint is DR, not the offer.

## Recommended fixes in the sheet

1. Make `CPA breakeven ($)` a formula: `= PAV × NDR / 3.75 / (1 + buffer)` with the
   buffer as a single named cell.
2. Add COGS / shipping / return-cost columns so `PROFIT after VAT` is formula-driven.
3. Complete or blank the الباقة السحرية row.
