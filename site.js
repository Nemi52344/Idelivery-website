// Shared header, footer, interactions for every page.
// Edit contact details here once; every page picks them up.
const CONTACT = {
  phone: '+91 89392 45390',
  phoneHref: 'tel:+918939245390',
  whatsapp: 'https://wa.me/918939245390', // same number as the phone line
  email: 'thauthkathri@bncmotors.in',
  site: 'www.idelivery.in',       // TODO: this domain does not resolve
  linkedin: 'https://www.linkedin.com/company/idelivery_solutions/home/',
};

// Impact numbers for the home page counters. Set `value` to a real number and it animates on load.
const STATS = [
  { value: 604, suffix: '', label: 'EVs on the road' },
  { value: 767478, suffix: '', label: 'Km covered' },
  { value: 5, suffix: '', label: 'Active cities' },
];

// City network (home page). Edit this list to match where iDelivery actually operates.
const CITIES = [
  { name: 'Delhi', region: 'National Capital Region', services: ['Rental', 'Leasing', 'Service'], at: [28.6139, 77.2090] },
  { name: 'Mumbai', region: 'Maharashtra', services: ['Rental', 'Leasing', 'Service'], at: [19.0760, 72.8777], tag: 'l' },
  { name: 'Bengaluru', region: 'Karnataka', services: ['Rental', 'Leasing', 'Service'], at: [12.9716, 77.5946], tag: 'l' },
  { name: 'Chennai', region: 'Tamil Nadu', services: ['Rental', 'Leasing', 'Service'], at: [13.0827, 80.2707] },
  { name: 'Coimbatore', region: 'Tamil Nadu', services: ['Rental', 'Service'], at: [11.0168, 76.9558], tag: 'l' },
];

const PAGES = [
  ['index.html', 'Home'],
  ['riders.html', 'For Riders'],
  ['fleet.html', 'For Business'],
  ['about.html', 'About'],
  ['careers.html', 'Careers'],
];

// Hosts like Netlify serve /riders for riders.html, so normalise before matching.
const slug = location.pathname.split('/').pop() || 'index';
const here = slug.endsWith('.html') ? slug : `${slug}.html`;
const ARROW = '<span class="arr" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';

function header() {
  const links = PAGES.map(([href, label]) =>
    `<li><a href="${href}"${href === here ? ' aria-current="page"' : ''}>${label}</a></li>`).join('');
  return `
  <div class="wrap nav">
    <a class="brand" href="index.html" aria-label="iDelivery home">
      <img src="img/mark.png" alt="" width="36" height="36">
      <span class="brand-word one"><span>i</span><span>Delivery</span></span>
    </a>
    <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8h16M4 16h16"/></svg>
    </button>
    <ul class="nav-links" id="nav-links">
      ${links}
      <li><a class="btn btn-primary btn-sm" href="fleet.html#enquire">Partner with us</a></li>
    </ul>
  </div>`;
}

function footer() {
  return `
  <div class="wrap">
    <p class="foot-big">Go <span>electric.</span><br>No hassle.</p>
    <div class="foot-grid">
      <div>
        <a class="brand" href="index.html">
          <img src="img/mark.png" alt="" width="36" height="36">
          <span class="brand-word one"><span>i</span><span>Delivery</span></span>
        </a>
        <p class="foot-tag">We run the EVs, so you can run your business. A division of Nemi.</p>
      </div>
      <div>
        <h4>Ride</h4>
        <ul>
          <li><a href="riders.html#plans">Rider plans</a></li>
          <li><a href="riders.html#apply">Apply to ride</a></li>
          <li><a href="riders.html#faq">Rider FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4>Business</h4>
        <ul>
          <li><a href="fleet.html">EV leasing</a></li>
          <li><a href="fleet?need=own#enquire">Own your fleet</a></li>
          <li><a href="about.html">About us</a></li>
          <li><a href="careers.html">Careers</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Talk to us</h4>
        <ul>
          <li><a href="${CONTACT.phoneHref}">${CONTACT.phone}</a></li>
          <li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
          <li><a href="${CONTACT.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a href="${CONTACT.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© ${new Date().getFullYear()} iDelivery. A division of Nemi.</span>
      <span>${CONTACT.site}</span>
    </div>
  </div>`;
}

const head = document.querySelector('.site-header');
head.innerHTML = header();
document.querySelector('.site-footer').innerHTML = footer();

document.body.insertAdjacentHTML('beforeend', `
  <a class="wa" href="${CONTACT.whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
  </a>`);

// Primary/dark buttons get the round arrow chip.
document.querySelectorAll('main .btn-primary:not(.btn-sm), main .btn-dark').forEach(b => {
  if (!b.querySelector('.arr') && b.tagName !== 'BUTTON') b.insertAdjacentHTML('beforeend', ARROW);
});

document.querySelectorAll('[data-contact]').forEach(el => {
  const key = el.dataset.contact;
  el.textContent = CONTACT[key];
  if (el.tagName === 'A') el.href = key === 'email' ? `mailto:${CONTACT.email}` : key === 'phone' ? CONTACT.phoneHref : CONTACT[key];
});
document.querySelectorAll('[data-contact-route="whatsapp"]').forEach(a => a.href = CONTACT.whatsapp);

const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  head.classList.toggle('menu-open', open);
  toggle.setAttribute('aria-expanded', open);
});

// Forms post to Netlify Forms when deployed there; locally they just show the thank-you state.
document.querySelectorAll('form[data-netlify]').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);
    const multipart = form.enctype === 'multipart/form-data';
    try {
      await fetch('/', multipart ? { method: 'POST', body: data }
        : { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() });
    } catch (_) { /* offline or local preview */ }
    form.classList.add('sent');
  });
});

// Service links (home page) open the business form with that service already selected.
const need = new URLSearchParams(location.search).get('need');
const needSelect = document.getElementById('f-need');
if (need && needSelect) {
  const pick = { lease: 'Lease EVs', own: 'Own your fleet', bulk: 'Own your fleet' }[need];
  if (pick) needSelect.value = pick;
}

// Service boxes (home page): each box opens its detail pop-up. Esc, the close button or a click outside closes it.
document.querySelectorAll('[data-open]').forEach(btn => {
  const dlg = document.getElementById(btn.dataset.open);
  if (!dlg) return;
  btn.addEventListener('click', () => dlg.showModal());
  dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });
  dlg.addEventListener('close', () => btn.focus());
});

// Plan buttons prefill the plan field on the apply form.
document.querySelectorAll('[data-plan]').forEach(btn => {
  btn.addEventListener('click', () => {
    const select = document.querySelector('#apply select[name="plan"]');
    if (select) select.value = btn.dataset.plan;
  });
});

const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Client logos: one list, shown as a scrolling strip on every page.
// The home page has its own Clients and Partners section ([data-clients]); other pages get a compact strip before the footer.
// [file, name, height in px]: heights balance visual weight across wide wordmarks and square marks.
const CLIENTS = [
  ['india-post.png', 'India Post', 52], ['dominos.svg', "Domino's", 30], ['instamart.svg', 'Swiggy Instamart', 41],
  ['zepto.svg', 'Zepto', 37], ['blinkit.svg', 'Blinkit', 54], ['zomato.svg', 'Zomato', 31], ['bigbasket.svg', 'bigbasket', 30], ['rapido.svg', 'Rapido', 40],
];
const logoRow = hidden => `<ul class="logo-track"${hidden ? ' aria-hidden="true"' : ''}>` +
  CLIENTS.map(([f, n, h]) => `<li><img src="img/clients/${f}" alt="${hidden ? '' : n}" style="--h:${h}px" loading="lazy"></li>`).join('') + '</ul>';
let clientBox = document.querySelector('[data-clients]');
if (!clientBox && document.querySelector('main')) {
  const strip = document.createElement('section');
  strip.className = 'clients-strip';
  strip.innerHTML = '<div class="wrap"><p class="pt-label">Trusted by fleet and enterprise customers</p>' +
    '<div class="logo-marquee" data-clients aria-label="Fleet and enterprise customers"></div></div>';
  document.querySelector('main').appendChild(strip);
  clientBox = strip.querySelector('[data-clients]');
}
if (clientBox) clientBox.innerHTML = logoRow(false) + logoRow(true);

// Count-up impact stats (home page).
const statBox = document.querySelector('[data-stats]');
if (statBox) {
  statBox.innerHTML = STATS.map(s =>
    `<div class="stat"><b><span data-count="${s.value ?? ''}">${s.value == null ? 'XX' : '0'}</span><small>${s.suffix}</small></b><span>${s.label}</span></div>`).join('');
  statBox.querySelectorAll('[data-count]').forEach(el => {
    const end = parseFloat(el.dataset.count);
    if (isNaN(end)) return;
    if (still) { el.textContent = end.toLocaleString('en-IN'); return; }
    const t0 = performance.now(), dur = 1600;
    const tick = t => {
      const k = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(end * eased).toLocaleString('en-IN');
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

// CO2 section (home): estimate from the EV count in STATS, with every assumption printed under the numbers.
const co2 = document.querySelector('[data-co2]');
if (co2) {
  const evs = STATS[0].value, kmDay = 80, kmPerL = 45, kgPerL = 2.31, treeKg = 21;
  const perEv = kmDay * 365 / kmPerL * kgPerL;          // kg per EV per year
  const tonnes = evs * perEv / 1000, trees = evs * perEv / treeKg;
  const round = (n, step) => Math.round(n / step) * step;
  const vals = [['[data-co2-tonnes]', round(tonnes, 10)], ['[data-co2-per]', round(perEv, 10)], ['[data-co2-trees]', round(trees, 1000)]];
  co2.querySelector('[data-co2-evs]').textContent = evs;
  const run = () => vals.forEach(([sel, end]) => {
    const el = co2.querySelector(sel);
    if (still) { el.textContent = end.toLocaleString('en-IN'); return; }
    const t0 = performance.now();
    const tick = t => { const k = Math.min((t - t0) / 1600, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString('en-IN'); if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); run(); } }, { threshold: .3 });
    io.observe(co2);
  } else run();
}

// Savings calculator (home, riders): energy cost only, all assumptions editable by the visitor.
const byId = id => document.getElementById(id);
if (byId('c-km')) {
  const inr = n => '₹' + Math.round(n).toLocaleString('en-IN');
  const calc = () => {
    const km = +byId('c-km').value, days = +byId('c-days').value;
    const petrol = +byId('c-petrol').value || 0, mileage = +byId('c-mileage').value || 1, ev = +byId('c-ev').value || 0;
    const monthKm = km * days;
    const p = monthKm / mileage * petrol, e = monthKm * ev, save = Math.max(p - e, 0);
    byId('o-km').textContent = km + ' km'; byId('o-days').textContent = days + ' days';
    byId('r-petrol').textContent = inr(p); byId('r-ev').textContent = inr(e);
    byId('r-save').textContent = inr(save); byId('r-year').textContent = inr(save * 12);
    const perKm = n => '₹' + n.toFixed(2);
    if (byId('r-petrol-km')) { byId('r-petrol-km').textContent = perKm(petrol / mileage); byId('r-ev-km').textContent = perKm(ev); }
    const max = Math.max(p, e, 1);
    if (byId('b-petrol')) { byId('b-petrol').style.width = (p / max * 100) + '%'; byId('b-ev').style.width = Math.max(e / max * 100, 2) + '%'; }
  };
  ['c-km', 'c-days', 'c-petrol', 'c-mileage', 'c-ev'].forEach(id => byId(id).addEventListener('input', calc));
  calc();
}

// Tab groups: buttons with data-view switch sibling panels with data-panel inside the same [data-tabs] wrapper.
document.querySelectorAll('[data-tabs]').forEach(group => {
  const btns = group.querySelectorAll('[data-view]');
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.setAttribute('aria-selected', b === btn));
    group.querySelectorAll('[data-panel]').forEach(p => p.hidden = p.dataset.panel !== btn.dataset.view);
  }));
});

// Control-tower map (home and fleet pages): geo-tagged riders on a real dark street map (Esri Dark Gray Canvas, keyless) with example rider positions. Locked so it never steals page scroll.
const mapEl = document.querySelector('[data-fleet-map]');
if (mapEl && window.L) {
  const map = L.map(mapEl, {
    center: [12.952, 77.612], zoom: 12, zoomSnap: 0.25, zoomControl: false, attributionControl: false,
    dragging: false, scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false, keyboard: false, touchZoom: false, tap: false,
  });
  L.control.attribution({ position: 'topright', prefix: false }).addTo(map);
  const esri = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/';
  const tone = mapEl.closest('.dark') ? 'Dark' : 'Light'; // light sections get the light gray map
  if (tone === 'Light') {
    // Light sections: a clear street map with visible roads (Esri World Street Map, keyless).
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16, attribution: '&copy; Esri, HERE, Garmin, OpenStreetMap',
    }).addTo(map);
  } else {
    L.tileLayer(esri + 'World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16, attribution: '&copy; Esri, HERE, Garmin, OpenStreetMap',
    }).addTo(map);
    L.tileLayer(esri + 'World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', { maxZoom: 16, pane: 'shadowPane' }).addTo(map);
  }
  // Example fleet. R-1042 is the rider shown in the Rider card (EV-0142), R-1210 is the low-battery EV-0201
  // from the Battery card.
  const bikes = [
    [12.9300, 77.6150, 'road'], [12.9200, 77.6460, 'road'], [12.9250, 77.5938, 'road'],
    [12.9857, 77.6057, 'road'], [12.9800, 77.6780, 'road'], [12.9560, 77.7010, 'road'],
    [12.9756, 77.6066, 'charge'], [12.9279, 77.6271, 'charge'],
    [12.9690, 77.5880, 'low', 'R-1210 · 18%'],
    [12.9352, 77.6245, 'road'],
    [12.9784, 77.6408, 'sel', 'R-1042 · EV-0142'],
  ];
  // Today's route for R-1042, ending at the live position.
  L.polyline([[12.9520, 77.5990], [12.9585, 77.6105], [12.9660, 77.6180], [12.9700, 77.6300], [12.9784, 77.6408]], {
    color: '#FF7310', weight: 4, opacity: .9, dashArray: '1 8', lineCap: 'round', className: 'live-route',
  }).addTo(map);
  bikes.forEach(([lat, lng, kind, label]) => L.marker([lat, lng], {
    icon: L.divIcon({
      className: '',
      html: `<span class="bike-pin ${kind}"></span>${label ? `<span class="pin-label ${kind}">${label}</span>` : ''}`,
      iconSize: [18, 18], iconAnchor: [9, 9],
    }),
    keyboard: false, zIndexOffset: kind === 'sel' ? 1000 : 0,
  }).addTo(map));

  // Frame every rider on any screen size. When the rider and battery cards overlap the map, keep pins in the clear middle band.
  const overlap = () => { const l = document.querySelector('[data-layers]'); return l && getComputedStyle(l).gridTemplateColumns.split(' ').length > 1; };
  const clearZone = () => {
    // Cards sit on the map's right edge: keep pins (and their labels) left of them and above the map key.
    const m = map.getContainer().getBoundingClientRect();
    const cardLeft = Math.min(document.querySelector('.layer-rider').getBoundingClientRect().left, document.querySelector('.layer-batt').getBoundingClientRect().left);
    return { paddingTopLeft: [120, 110], paddingBottomRight: [Math.max(40, m.right - cardLeft + 110), 56], maxZoom: 13 };
  };
  const fit = () => map.fitBounds(L.latLngBounds(bikes.map(b => [b[0], b[1]])), overlap()
    ? clearZone()
    : { paddingTopLeft: [96, 80], paddingBottomRight: [100, 56], maxZoom: 13 });
  fit();
  setTimeout(() => { map.invalidateSize(); fit(); }, 400);
  addEventListener('resize', () => { map.invalidateSize(); fit(); });
  // Re-frame once the cards finish animating in or the map changes size, so no pin ends up under a card.
  let refit;
  const settle = () => { clearTimeout(refit); refit = setTimeout(() => { map.invalidateSize(); fit(); }, 120); };
  if (window.ResizeObserver) new ResizeObserver(settle).observe(mapEl);
  document.querySelector('[data-layers]')?.addEventListener('transitionend', e => { if (e.target.matches('[data-layers], .layer')) settle(); });
  document.querySelectorAll('[data-view="fleet"]').forEach(b => b.addEventListener('click', () => setTimeout(() => { map.invalidateSize(); fit(); }, 50)));
}

// City network map (home page): India with one pin per city, list beside it.
const cityEl = document.querySelector('[data-city-map]');
const cityList = document.querySelector('[data-city-list]');
if (cityList) cityList.innerHTML = CITIES.map((c, i) =>
  `<li data-city="${i}" tabindex="0"><span class="city-n">${String(i + 1).padStart(2, '0')}</span>` +
  `<span class="city-txt"><b>${c.name}</b><span>${c.region}</span></span>` +
  `<span class="city-svc">${c.services.map(x => `<i class="${x.toLowerCase()}">${x}</i>`).join('')}</span></li>`).join('');
if (cityEl && window.L) {
  const cmap = L.map(cityEl, { zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false,
    doubleClickZoom: false, boxZoom: false, keyboard: false, touchZoom: false, tap: false, zoomSnap: 1 }); // whole zoom levels: no tile seams
  L.control.attribution({ position: 'bottomright', prefix: false }).addTo(cmap);
  const esriC = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/';
  const ctone = cityEl.closest('.dark') ? 'Dark' : 'Light'; // light sections get the light gray map
  L.tileLayer(esriC + `World_${ctone}_Gray_Base/MapServer/tile/{z}/{y}/{x}`, { maxZoom: 16, attribution: '&copy; Esri, HERE, Garmin, OpenStreetMap' }).addTo(cmap);  // No place-name layer: only our own city tags show, so the map never names a city we are not in.
  // State borders, with the states we work in tinted orange.
  if (window.INDIA_STATES) {
    const ours = ['NCT of Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu'];
    L.geoJSON(window.INDIA_STATES, {
      interactive: false,
      style: f => ours.includes(f.properties.name)
        ? { color: '#e8833a', weight: 1, opacity: .7, fillColor: '#FF7310', fillOpacity: .14 }
        : { color: '#a9a7b3', weight: .8, opacity: .8, fillColor: '#ffffff', fillOpacity: .35 },
    }).addTo(cmap);
  }
  const pins = CITIES.map(c => L.marker(c.at, {
    keyboard: false,
    icon: L.divIcon({ className: '', html: `<span class="city-pin"></span><span class="city-tag ${c.tag || ''}">${c.name}</span>`, iconSize: [0, 0] }),
  }).addTo(cmap));
  const fitC = () => cmap.fitBounds(L.latLngBounds(CITIES.map(c => c.at)), { paddingTopLeft: [110, 40], paddingBottomRight: [110, 40], maxZoom: 6 });
  fitC();
  addEventListener('resize', () => { cmap.invalidateSize(); fitC(); });
  setTimeout(() => { cmap.invalidateSize(); fitC(); }, 400);
  cityList.querySelectorAll('li').forEach(li => {
    const el = () => pins[li.dataset.city].getElement();
    ['mouseenter', 'focus'].forEach(e => li.addEventListener(e, () => el()?.classList.add('on')));
    ['mouseleave', 'blur'].forEach(e => li.addEventListener(e, () => el()?.classList.remove('on')));
  });
}

// Bike turn: the step nearest the middle of the screen picks which render shows on the sticky stage.
const turnSteps = document.querySelectorAll('.turn-step');
const turnImgs = document.querySelectorAll('.turn-stage img');
const turnTag = document.querySelector('.turn-stage .tag');

// One scroll handler for reveal, header, turn and parallax.
document.documentElement.classList.add('js');
const cine = document.querySelectorAll('.cine img');
function onScroll() {
  const vh = innerHeight;
  head.classList.toggle('scrolled', scrollY > 24);
  document.querySelectorAll('.reveal:not(.in)').forEach(el => {
    if (el.getBoundingClientRect().top < vh * .9) el.classList.add('in');
  });
  if (turnSteps.length) {
    let best = 0, bestD = Infinity;
    turnSteps.forEach((s, i) => {
      const r = s.getBoundingClientRect(), d = Math.abs(r.top + r.height / 2 - vh / 2);
      if (d < bestD) { bestD = d; best = i; }
    });
    turnSteps.forEach((s, i) => s.classList.toggle('on', i === best));
    turnImgs.forEach((im, i) => im.classList.toggle('on', i === best));
    if (turnTag) turnTag.textContent = turnSteps[best].dataset.view || '';
  }
  if (!still) cine.forEach(im => {
    const r = im.parentElement.getBoundingClientRect();
    if (r.bottom > 0 && r.top < vh) im.style.transform = `translateY(${(r.top / vh) * -6}%)`;
  });
}
// Smooth inertial scrolling. Skipped for reduced motion or if the CDN script didn't load.
if (window.Lenis && !still) {
  const lenis = new Lenis({ duration: 1.15, anchors: { offset: -80 } });
  lenis.on('scroll', onScroll);
  const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
onScroll();
// Re-check after the page settles, so a jump to #section (or a restored scroll) still reveals content.
addEventListener('load', onScroll);
addEventListener('hashchange', () => setTimeout(onScroll, 50));
setTimeout(onScroll, 600);

// Fleet layers: chips on the left light up the matching card and open its explanation.
document.querySelectorAll('.fv-chips [data-layer], .fv-rows [data-layer]').forEach(chip => {
  const card = document.querySelector(`[data-layers] [data-layer="${chip.dataset.layer}"]`);
  if (!card) return;
  const on = v => { card.classList.toggle('is-on', v); chip.classList.toggle('is-on', v); };
  ['mouseenter', 'focus'].forEach(e => chip.addEventListener(e, () => on(true)));
  ['mouseleave', 'blur'].forEach(e => chip.addEventListener(e, () => on(false)));
  chip.addEventListener('click', () => on(true));
  ['mouseenter', 'focus'].forEach(e => card.addEventListener(e, () => chip.classList.add('is-on')));
  ['mouseleave', 'blur'].forEach(e => card.addEventListener(e, () => chip.classList.remove('is-on')));
});

// Business savings calculator: fleet size slider drives fuel cost saved, CO2 cut and tree numbers.
const gc = document.querySelector('[data-co2-calc]');
if (gc) {
  const kgPerEvDay = 80 / 45 * 2.31, treeKg = 21;
  const range = gc.querySelector('#gc-evs');
  const fmt = n => Math.round(n).toLocaleString('en-IN');
  const draw = () => {
    const evs = +range.value, day = evs * kgPerEvDay;
    gc.querySelector('[data-gc-evs-out]').textContent = evs.toLocaleString('en-IN');
    const save = evs * 80 * 365 * (103 / 45 - 0.30), lakh = save / 1e5;
    gc.querySelector('[data-gc-save]').textContent = lakh >= 100 ? `₹${(lakh / 100).toFixed(1)} crore` : `₹${lakh.toFixed(lakh < 10 ? 1 : 0)} lakh`;
    gc.querySelector('[data-gc-year]').textContent = fmt(day * 365 / 1000);
    gc.querySelector('[data-gc-trees]').textContent = fmt(Math.round(day * 365 / treeKg / 10) * 10);
    range.style.setProperty('--p', (evs - range.min) / (range.max - range.min) * 100 + '%');
  };
  range.addEventListener('input', draw);
  draw();
}

// Careers: open roles. To post a job, add one object here; to close it, delete it. The page, filters and form update themselves.
const JOBS = [
  { id: 'procurement-manager-coimbatore', title: 'Procurement Manager', team: 'Supply chain', city: 'Coimbatore', type: 'Full time',
    summary: 'Source, negotiate and plan the spares that keep our after-sales service running.',
    points: ['Find and manage vendors for automotive and EV spares.', 'Negotiate prices and keep costs under control.', 'Plan spares so the right part is ready at the right time.'],
    needs: ['3+ years in automotive or EV spares procurement.', 'Good command of Excel, ERP/DMS and inventory practice.', 'Strong negotiation, coordination and ownership.'],
    email: 'sureshdev@bncmotors.in', subject: 'Application – Procurement Manager, Coimbatore' },
  { id: 'stores-incharge-coimbatore', title: 'Stores In-charge', team: 'Supply chain', city: 'Coimbatore', type: 'Full time',
    summary: 'Run our spares stores so every workshop has the parts it needs.',
    points: ['Control inventory, GRN and parts issue for our workshops.', 'Keep stock records accurate every day.', 'Make sure critical spares are always available.'],
    needs: ['3+ years running automotive or EV spares stores.', 'Good command of Excel, ERP/DMS and inventory practice.', 'Strong coordination and ownership.'],
    email: 'sureshdev@bncmotors.in', subject: 'Application – Stores In-charge, Coimbatore' },
  { id: 'area-service-manager-mumbai', title: 'Area Service Manager', team: 'Service', city: 'Mumbai', type: 'Full time',
    summary: 'Lead after-sales service across Mumbai and keep every EV on the road.',
    points: ['Manage service operations, turnaround time, uptime and customer satisfaction.', 'Handle warranty claims, quality issues and repeat repairs.', 'Lead technicians, service advisors and service partners.', 'Work with procurement and stores on spares availability.', 'Build strong relationships with fleet and B2B customers.'],
    needs: ['Diploma, B.E. or B.Tech in Automobile or Mechanical Engineering.', '5+ years in automotive after-sales, including team handling.', 'EV or two-wheeler service knowledge is a plus.', 'Fluent in Marathi, Hindi and English.', 'Good command of DMS/ERP and Excel.'],
    email: 'sureshdev@bncmotors.in', subject: 'Application – ASM Mumbai' },
];

const jobsEl = document.querySelector('[data-jobs]');
if (jobsEl) {
  const share = id => 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(location.origin + location.pathname + '#' + id);
  const teams = ['All', ...new Set(JOBS.map(j => j.team))];
  const filters = document.querySelector('[data-job-filters]');
  const roleSelect = document.getElementById('c-role');
  filters.innerHTML = teams.map((t, k) => `<button type="button" class="jf${k ? '' : ' on'}" data-team="${t}">${t}<span>${t === 'All' ? JOBS.length : JOBS.filter(j => j.team === t).length}</span></button>`).join('');
  jobsEl.innerHTML = JOBS.map(j => `
    <details class="job" id="${j.id}" data-team="${j.team}">
      <summary>
        <span class="job-main"><b>${j.title}</b><span class="job-sum">${j.summary}</span></span>
        <span class="job-tags"><em>${j.team}</em><em>${j.city}</em><em>${j.type}</em></span>
        <i class="job-x" aria-hidden="true"></i>
      </summary>
      <div class="job-body">
        <div class="job-cols">
          <div><h4>What you will do</h4><ul class="job-pts">${j.points.map(p => `<li>${p}</li>`).join('')}</ul></div>
          ${j.needs ? `<div><h4>What we need</h4><ul class="job-pts job-needs">${j.needs.map(p => `<li>${p}</li>`).join('')}</ul></div>` : ''}
        </div>
        <div class="job-acts">
          <a class="btn btn-primary btn-sm" href="#apply" data-apply="${j.title}">Apply for this role</a>
          ${j.email ? `<a class="job-mail" href="mailto:${j.email}?subject=${encodeURIComponent(j.subject || j.title)}">Or email your CV to ${j.email}</a>` : ''}
          <a class="job-share" href="${share(j.id)}" target="_blank" rel="noopener">Share on LinkedIn</a>
        </div>
      </div>
    </details>`).join('');
  roleSelect.innerHTML = '<option value="">Select a role</option>' + JOBS.map(j => `<option>${j.title}, ${j.city}</option>`).join('') + '<option>Open application</option>';
  filters.addEventListener('click', e => {
    const b = e.target.closest('[data-team]'); if (!b) return;
    filters.querySelectorAll('.jf').forEach(x => x.classList.toggle('on', x === b));
    jobsEl.querySelectorAll('.job').forEach(j => { j.hidden = b.dataset.team !== 'All' && j.dataset.team !== b.dataset.team; });
  });
  jobsEl.addEventListener('click', e => {
    const a = e.target.closest('[data-apply]'); if (!a) return;
    const job = JOBS.find(j => j.title === a.dataset.apply);
    roleSelect.value = `${job.title}, ${job.city}`;
  });
  const open = document.getElementById(location.hash.slice(1));
  if (open && open.classList.contains('job')) open.open = true;
  document.querySelectorAll('[data-linkedin]').forEach(a => { a.href = CONTACT.linkedin; });
}

// Motion: masked headline lines, staggered reveals, image settles, parallax, scroll progress. All skipped for reduced motion.
if (!still) {
  const root = document.documentElement;
  root.classList.add('motion');

  // Headlines: every line slides up from behind a mask.
  const wrapLine = nodes => {
    const ln = document.createElement('span'); ln.className = 'ln';
    const inner = document.createElement('span'); inner.className = 'ln-i';
    nodes.forEach(n => inner.appendChild(n)); ln.appendChild(inner); return ln;
  };
  const heads = [...document.querySelectorAll('main h1, main h2')].filter(h => !h.closest('.smodal'));
  heads.forEach(h => {
    const hls = h.querySelectorAll(':scope > .hl');
    if (hls.length) {
      hls.forEach(hl => {
        const inner = document.createElement('span'); inner.className = 'ln-i';
        [...hl.childNodes].forEach(n => inner.appendChild(n));
        hl.appendChild(inner); hl.classList.add('ln');
      });
    } else {
      const groups = [[]];
      [...h.childNodes].forEach(n => { if (n.nodeName === 'BR') { n.remove(); groups.push([]); } else groups[groups.length - 1].push(n); });
      groups.filter(g => g.some(n => n.textContent.trim())).forEach(g => h.appendChild(wrapLine(g)));
    }
    h.classList.add('lines'); h.classList.remove('reveal');
    // A wrapper that faded as one block now hands that job to whatever sits beside the headline.
    let box = h, k = 1;
    const parentReveal = h.parentElement.closest('.reveal');
    if (parentReveal) {
      parentReveal.classList.remove('reveal');
      while (box !== parentReveal) {
        [...box.parentElement.children].forEach(sib => { if (sib !== box) { sib.classList.add('reveal'); sib.style.setProperty('--d', `${k++ * 90 + 120}ms`); } });
        box = box.parentElement;
      }
    }
  });

  // Groups: cards in a row arrive one after another.
  document.querySelectorAll('.sboxes, .ways-2, .crew, .proofs, .rcards, .plans, .bv-points, .why-row, .jobs, .contact-paths, .city-list').forEach(g => {
    [...g.children].forEach((c, i) => { c.classList.add('reveal'); c.classList.remove('d1', 'd2', 'd3'); c.style.setProperty('--d', `${i * 80}ms`); });
  });
  document.querySelectorAll('.vs-row').forEach((r, i) => r.style.setProperty('--r', `${i * 70 + 250}ms`));
  document.querySelectorAll('.batt').forEach((b, i) => b.style.setProperty('--r', `${i * 90 + 300}ms`));

  const settle = el => setTimeout(() => el.classList.add('settled'), 1700);
  // Checked directly on scroll and on timers, so nothing can stay hidden if an observer or frame loop is paused.
  let pending = [...document.querySelectorAll('.lines, .reveal, .way-img, .lc-photo, .bv-photo, .face, .layers, .story-stats')];
  const sweep = () => {
    const vh = innerHeight;
    pending = pending.filter(el => {
      const r = el.getBoundingClientRect();
      if (!r.width && !r.height) return true;
      if (r.top > vh * .92) return true;
      el.classList.add('in', 'seen'); settle(el);
      return false;
    });
  };
  addEventListener('scroll', sweep, { passive: true }); addEventListener('resize', sweep); addEventListener('load', sweep);
  [0, 300, 1200].forEach(ms => setTimeout(sweep, ms));
  sweep();

  // Count up plain numbers once they are on screen.
  const counter = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    counter.unobserve(e.target);
    const el = e.target, m = el.textContent.trim().match(/^([\d,]+)(\D*)$/);
    if (!m) return;
    const end = +m[1].replace(/,/g, ''), t0 = performance.now();
    const tick = t => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 4))).toLocaleString('en-IN') + m[2]; if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: .6 });
  document.querySelectorAll('.story-stats strong').forEach(s => counter.observe(s));

  // Scroll progress, hide-on-scroll header and parallax share one frame loop.
  const bar = document.createElement('i'); bar.className = 'scroll-bar'; bar.setAttribute('aria-hidden', 'true'); document.body.appendChild(bar);
  const movers = [...document.querySelectorAll('.hero-full-media, .hero-media, .co2-bg, .bv-photo img')];
  let last = scrollY, queued = false;
  const frame = () => {
    queued = false;
    const y = scrollY, vh = innerHeight, max = root.scrollHeight - vh;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    if (!document.querySelector('.site-header.menu-open')) {
      if (y > last + 4 && y > vh * .7) head.classList.add('tuck');
      else if (y < last - 4 || y < vh * .7) head.classList.remove('tuck');
    }
    last = y;
    if (innerWidth > 900) movers.forEach(m => {
      const r = m.getBoundingClientRect();
      if (r.bottom < -80 || r.top > vh + 80) return;
      if (m.matches('.hero-full-media, .hero-media')) m.style.transform = `translate3d(0, ${y * .14}px, 0)`;
      else m.style.setProperty('--py', `${((r.top + r.height / 2 - vh / 2) / vh) * -5}%`);
    });
  };
  const ask = () => { if (!queued) { queued = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', ask, { passive: true }); addEventListener('resize', ask); ask();
}
