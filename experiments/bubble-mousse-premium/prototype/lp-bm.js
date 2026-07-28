/* Bubble Mousse — Concept A
   Aucune dépendance. La page reste lisible et le formulaire soumissible sans JS.
   Budget cible : < 15 ko compressé. */
(function () {
  'use strict';

  /* ---------- Données marché ----------
     Prix issus de docs/03-pricing.md. Paliers psychologiques identiques d'un
     marché à l'autre : ne jamais laisser une conversion automatique les casser. */
  var MARKETS = {
    SA: {
      cc: '+966', cur: 'ر.س', dec: 0,
      price: { 1: 149, 2: 199, 3: 249 },
      phone: /^0?5[0-9]{8}$/,
      phoneHint: 'أدخلي رقمًا سعوديًا يبدأ بـ 5 (9 أرقام)',
      cities: ['الرياض','جدة','مكة المكرمة','المدينة المنورة','الدمام','الخبر',
               'الظهران','الأحساء','القطيف','الجبيل','الطائف','تبوك','بريدة',
               'عنيزة','حائل','خميس مشيط','أبها','نجران','جازان','ينبع','عرعر','سكاكا']
    },
    AE: {
      cc: '+971', cur: 'د.إ', dec: 0,
      price: { 1: 149, 2: 199, 3: 249 },
      phone: /^0?5[0-9]{8}$/,
      phoneHint: 'أدخلي رقمًا إماراتيًا يبدأ بـ 5 (9 أرقام)',
      cities: ['دبي','أبوظبي','الشارقة','عجمان','أم القيوين','رأس الخيمة','الفجيرة','العين']
    },
    OM: {
      cc: '+968', cur: 'ر.ع', dec: 1,
      price: { 1: 14.9, 2: 19.9, 3: 24.9 },
      phone: /^[79][0-9]{7}$/,
      phoneHint: 'أدخلي رقمًا عمانيًا من 8 أرقام يبدأ بـ 7 أو 9',
      cities: ['مسقط','السيب','مطرح','بوشر','صلالة','صحار','نزوى','صور',
               'البريمي','عبري','بركاء','الرستاق','إبراء','خصب']
    }
  };

  var UNITS = { 1: 1, 2: 2, 3: 3 };

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ================= Prix et marché ================= */

  var countrySel = $('[data-country]');
  var citySel    = $('[data-city]');
  var ccEl       = $('[data-cc]');
  var totalEl    = $('[data-total]');
  var stickyPrice = $('[data-sticky-price]');
  var market     = MARKETS.SA;

  function fmt(n, m) {
    return n.toFixed(m.dec).replace(/\.0$/, '') + ' ' + m.cur;
  }

  /* Prix par flacon : une décimale conservée quand elle change de dizaine.
     199 ÷ 2 = 99,5 doit s'afficher 99,5 et non 100 — le seuil des 100 est
     un argument, l'arrondi le détruirait. */
  function fmtUnit(n, m) {
    var v = Math.round(n * 10) / 10;
    return (v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)) + ' ' + m.cur;
  }

  function currentTier() {
    var checked = $('input[name="tier"]:checked');
    return checked ? checked.value : '2';
  }

  function renderPrices() {
    ['1', '2', '3'].forEach(function (t) {
      var p = market.price[t];
      var priceEl = $('[data-price="' + t + '"]');
      var unitEl  = $('[data-unit="' + t + '"]');
      if (priceEl) priceEl.textContent = fmt(p, market);
      /* Le prix par flacon est affiché sur les trois paliers, y compris le
         palier 1 : c'est la comparaison qui rend les paliers 2 et 3 évidents. */
      if (unitEl) unitEl.textContent = fmtUnit(p / UNITS[t], market) + ' للعبوة';
    });

    var total = market.price[currentTier()];
    if (totalEl) totalEl.textContent = fmt(total, market);
    if (stickyPrice) stickyPrice.textContent = fmt(total, market);
    if (ccEl) ccEl.textContent = market.cc;
  }

  function renderCities() {
    if (!citySel) return;
    citySel.innerHTML = '';
    var ph = document.createElement('option');
    ph.value = ''; ph.textContent = 'اختاري المدينة';
    citySel.appendChild(ph);
    market.cities.forEach(function (c) {
      var o = document.createElement('option');
      o.value = c; o.textContent = c;
      citySel.appendChild(o);
    });
  }

  if (countrySel) {
    countrySel.addEventListener('change', function () {
      market = MARKETS[countrySel.value] || MARKETS.SA;
      renderPrices();
      renderCities();
      track('select_country', { country: countrySel.value });
    });
  }

  $$('input[name="tier"]').forEach(function (input) {
    input.addEventListener('change', function () {
      renderPrices();
      track('select_tier', { tier: input.value });
    });
  });

  renderPrices();
  renderCities();

  /* ================= Révélation au scroll ================= */

  var revealables = $$('.js-reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        revealObs.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.15 });
    revealables.forEach(function (el) { revealObs.observe(el); });
  }

  /* ================= Anneau 25 minutes — animation signature =================
     Seul moment cinématographique de la page : l'anneau se remplit pendant que
     le nombre compte jusqu'à 25. Le nombre final est déjà dans le HTML, donc
     la valeur reste juste si le script échoue, et le lecteur d'écran lit un
     texte fixe (.lp-bm-sr) plutôt qu'un compteur qui change. */

  var RING_MS = 1600;
  var timer   = $('[data-timer]');
  var countEl = $('[data-count]');

  function runCount() {
    if (!countEl) return;
    var t0 = null;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / RING_MS, 1);
      /* Même courbe que le trait de l'anneau : les deux doivent finir ensemble. */
      var eased = 1 - Math.pow(1 - p, 3);
      countEl.textContent = String(Math.round(eased * 25));
      if (p < 1) requestAnimationFrame(step);
    }
    countEl.textContent = '0';
    requestAnimationFrame(step);
  }

  if (timer) {
    if (reduced || !('IntersectionObserver' in window)) {
      timer.classList.add('is-on');
    } else {
      var timerObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          timer.classList.add('is-on');
          runCount();
          timerObs.disconnect();
        });
      }, { threshold: 0.5 });
      timerObs.observe(timer);
    }
  }

  /* ================= Hotspots applicateur ================= */

  var hsOut = $('[data-hs-out]');
  $$('.lp-bm-hs').forEach(function (btn) {
    btn.addEventListener('click', function () {
      $$('.lp-bm-hs').forEach(function (b) { b.classList.toggle('is-on', b === btn); });
      if (hsOut) hsOut.textContent = btn.getAttribute('data-hs');
    });
  });

  /* ================= Barre CTA fixe ================= */

  var sticky = $('[data-sticky]');
  var hero   = $('.lp-bm-hero');
  var offer  = $('#offre');

  if (sticky && hero && offer && 'IntersectionObserver' in window) {
    sticky.hidden = false;
    var pastHero = false, inOffer = false;

    function syncSticky() {
      sticky.classList.toggle('is-on', pastHero && !inOffer);
    }
    new IntersectionObserver(function (e) {
      pastHero = !e[0].isIntersecting; syncSticky();
    }, { threshold: 0 }).observe(hero);

    new IntersectionObserver(function (e) {
      inOffer = e[0].isIntersecting; syncSticky();
    }, { threshold: 0 }).observe(offer);
  }

  /* ================= Formulaire ================= */

  var form = $('[data-form]');

  var RULES = {
    fullname: {
      test: function (v) { return v.trim().length >= 3; },
      msg: 'الرجاء إدخال الاسم الكامل'
    },
    phone: {
      test: function (v) { return market.phone.test(v.replace(/[\s-]/g, '')); },
      msg: function () { return market.phoneHint; }
    },
    city: {
      test: function (v) { return v !== ''; },
      msg: 'الرجاء اختيار المدينة'
    },
    address: {
      test: function (v) { return v.trim().length >= 8; },
      msg: 'الرجاء إدخال العنوان بالتفصيل'
    }
  };

  function validateField(name) {
    var field = form.elements[name];
    var rule  = RULES[name];
    var out   = $('[data-err="' + name + '"]');
    var ok    = rule.test(field.value);
    field.setAttribute('aria-invalid', ok ? 'false' : 'true');
    if (out) out.textContent = ok ? '' : (typeof rule.msg === 'function' ? rule.msg() : rule.msg);
    return ok;
  }

  if (form) {
    Object.keys(RULES).forEach(function (name) {
      var field = form.elements[name];
      if (!field) return;
      field.addEventListener('blur', function () { validateField(name); });
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true') validateField(name);
      });
    });

    var started = false;
    form.addEventListener('focusin', function () {
      if (started) return;
      started = true;
      track('begin_checkout', { tier: currentTier() });
    });

    if (citySel) {
      citySel.addEventListener('change', function () {
        if (citySel.value) track('add_shipping_info', { city: citySel.value });
      });
    }

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var valid = Object.keys(RULES).every(function (n) { return validateField(n); });
      if (!valid) {
        var firstBad = $('[aria-invalid="true"]', form);
        if (firstBad) firstBad.focus();
        return;
      }

      var order = {
        tier: currentTier(),
        units: UNITS[currentTier()],
        country: countrySel ? countrySel.value : 'SA',
        currency: market.cur,
        total: market.price[currentTier()],
        fullname: form.elements.fullname.value.trim(),
        phone: market.cc + form.elements.phone.value.replace(/[\s-]/g, '').replace(/^0/, ''),
        city: form.elements.city.value,
        address: form.elements.address.value.trim()
      };

      /* PROTOTYPE : aucune commande n'est envoyée.
         En production → App Proxy Shopify → création de commande via Admin API.
         Voir docs/04-integration-shopify.md §3. */
      console.log('[prototype] commande', order);

      track('purchase', { tier: order.tier, value: order.total, currency: order.country });

      var ok = $('[data-ok]');
      if (ok) { ok.hidden = false; ok.focus(); }
      form.querySelector('button[type="submit"]').disabled = true;
    });
  }

  /* ================= Analytics ================= */

  /* Couche d'abstraction : les pixels réels (Meta, TikTok, Snap) se branchent
     ici, après consentement. event_id partagé pour la déduplication CAPI.
     Voir docs/01-architecture.md §9. */
  function track(name, params) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, params || {}));
  }

  track('view_content', {});

  var depths = [25, 50, 75];
  var fired = {};
  var onScroll = function () {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    var pct = (window.scrollY / max) * 100;
    depths.forEach(function (d) {
      if (pct >= d && !fired[d]) { fired[d] = true; track('scroll_' + d, {}); }
    });
    if (fired[75]) window.removeEventListener('scroll', onScroll);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  if (offer && 'IntersectionObserver' in window) {
    var offerSeen = false;
    new IntersectionObserver(function (e) {
      if (e[0].isIntersecting && !offerSeen) { offerSeen = true; track('view_offer', {}); }
    }, { threshold: 0.5 }).observe(offer);
  }
})();
