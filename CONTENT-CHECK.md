# iDelivery site — content check

All six pages, read as rendered in the browser (so JS-injected content is included).

---

## 1. Must fix before launch — placeholder text visible to visitors

| Where | What a visitor sees |
|---|---|
| `contact.html` | **Head office: Nemi, [address line], [city] [PIN]** — literal square brackets on the page |
| `riders.html` | All three plan prices: **₹XXX / day**, **₹X,XXX / week**, **₹X,XXX / month** |
| Every page footer + contact | **+91 00000 00000** — phone, and the WhatsApp link goes to `wa.me/910000000000` |
| `index.html` | **PARTNER LOGO** — the empty second financial-partner tile, now beside Shrinidhi Finance |

The phone, WhatsApp, email and domain are all set in one place — `site.js` lines 4–9 —
and each already carries a `// TODO` comment. One edit there fixes them everywhere.

The plan prices are the biggest risk: a rider who reaches the plans section and sees
₹XXX has nothing to act on, and that section is the main conversion point of the page.

---

## 2. Domain and email — needs a decision

The footer, the contact page and the fleet enquiry all show:

- `hello@idelivery.in`
- `www.idelivery.in`

Both are marked `// TODO: confirm` in `site.js`. My note from an earlier session records
the canonical domain as **ideliverymobility.com**, which doesn't match either. Three
things to settle:

1. Which domain the site actually ships on.
2. Whether `hello@` at that domain exists and is monitored.
3. `info@boommotors.com` is the working address on record — if that's where enquiries
   should land, the site currently points elsewhere.

---

## 3. Claims that still over-promise

These are the same class of issue we worked through today — language that promises more
than maintenance-only cover, or promises it to fleet owners as well as renters.

**Fleet page hero** (the first thing a buyer reads)
> You grow the business. **We run the fleet.**
> Zero-emission fleets with live AI updates and **a team that keeps them moving.**

**Own-the-fleet section**
> Own the fleet. **Skip the upkeep.**
> Your EVs stay on your books and **off your to-do list.**

**Service feature, same section**
> Our team keeps your EVs moving, **wherever you run.**

That last one also contradicts the rest of the site: service is in five cities, not
wherever they run. Worth fixing on accuracy grounds alone.

**Home page, lease card**
> **We keep them running.** You keep delivering.

**Home page, own card**
> The fleet is yours. **The upkeep is ours.** / **We take care of your fleet.**

**Home page hero**
> Zero-emission EVs for riders and businesses. **We take care of everything else.**

---

## 4. Claims I could not verify anywhere else on the site

- `riders.html`, Monthly plan — **"Ride now, own it later."** This implies rent-to-own.
  Nothing else on the site describes such a path, and there's no page explaining the
  terms. If it exists it needs somewhere to land; if it doesn't, it should go.
- `fleet.html`, Cut emissions — **"The ESG numbers large clients ask for, every month."**
  Promises monthly ESG reporting as a deliverable. Not mentioned anywhere else.

---

## 5. Consistency

- **Three different ways of saying the same thing** across the three rider plans:
  Daily "We handle the servicing", Weekly "We handle the maintenance", Monthly "First in
  line for service". Readable, but it looks accidental rather than deliberate.
- **Coimbatore** is the only city without a **Leasing** tag, so the city table has one
  visible gap.
- **"Worry less" / "No worries"** sit close together on the riders page — the hero and
  the section heading immediately under it.

---

## 6. SEO and link sharing

- **No Open Graph tags on any page.** No `og:title`, `og:description`, `og:image`,
  `og:url`. Every link shared on WhatsApp, LinkedIn or Slack will preview as a bare URL
  with no picture. For a site that will mostly be shared by WhatsApp, this is the single
  highest-value technical fix on the list.
- **No `rel="canonical"` on any page.**
- **`index.html` and `about.html` carry the identical meta description**, word for word.
- **`riders.html` meta description** still says "with servicing included", which is the
  wording we removed from the page itself today.

---

## 7. Fine as they are — checked, no action

- Every "zero" left on the site refers to emissions, not money.
- The deposit is disclosed in all four places it matters: the rent card, the riders FAQ,
  the note under the plan cards, and the About proof row.
- Both savings calculators state their assumptions underneath.
- The three remaining mentions of repair on the riders page all describe a replacement
  EV during a repair. None claims a free repair.
- Internal links all resolve. `_redirects` covers the old `/bikes` URL.
- No console errors on any of the six pages.
