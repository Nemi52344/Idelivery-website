# Site photography — what needs replacing

The site uses **34 images**. Six are logos and icons, five are the team headshots
we've just done, and **three are genuine photographs**. The remaining
**eighteen are AI-generated** and are the ones you're reacting to.

---

## Correction to an earlier version of this note

An earlier draft of this file claimed the AI images "invent a generic e-scooter"
and that none of them showed your bike. **That was wrong.** Most of the generated
images on the site do show the BNC Challenger — the exoskeleton tubular frame,
the flat bench seat, the round halo headlight, the tubular front crash guard and
the side cargo racks are all there, mostly in blue. `fleet-riders.jpg`,
`bulk-lineup.jpg`, `rider-banner.jpg`, `rider-portrait.jpg` and
`rider-workshop.jpg` are all recognisably the Challenger.

Acting on that wrong premise, three of them were regenerated and had to be put
back. **Do not replace an image on the assumption the bike is wrong — open it and
check against the renders in `circuit/data/product/Challenger 110/` first.**

## What is actually worth fixing

**Setting, not product.** `rider-workshop.jpg`, used on the riders page under
"Maintenance", shows a white European mechanic in a clean European workshop. The
home hero has a generic Western skyline. For a company operating in Delhi,
Mumbai, Bengaluru, Chennai and Coimbatore, that's a brand problem — but it's
about where the picture is set and who is in it, not about the bike.

**Polish.** Some of them read as rendered rather than photographed. That is a
real but much smaller issue than a wrong product would have been.

---

## The three real photographs you already have

| File | What it shows |
|---|---|
| `img/real/india-post-rider.jpg` | India Post rider with her EV and team |
| `img/real/handover-dindigul.jpg` | A handover in Dindigul |
| `img/real/rider-app.jpg` | Rider with the app |

These are the only images on the site showing your actual product. They are also,
not coincidentally, the only ones that carry any proof.

---

## Images a real photograph would still improve (14)

Not because the bike is wrong in them — in most cases it isn't — but because a
real photograph carries proof that a generated one never can, and fixes the
setting problems above at the same time. A photographer, or anyone with a recent
phone, could shoot all of these in a day across one or two cities. You have 604
bikes in operation.

| File | Where it appears | Shot needed |
|---|---|---|
| `hero-convoy.jpg` | Home hero | Riders setting off, 3–4 bikes, morning light |
| `rider-portrait.jpg` | Home, EV rental card | One rider beside their bike, delivery box on |
| `fleet-riders-wide.jpg` | Home, EV leasing card | Line of riders at a hub |
| `biz-hub-dusk.jpg` | Fleet hero | Bikes on charge at a hub, dusk |
| `riders-hero.jpg` | Riders hero | Rider mid-route in traffic |
| `rider-handover.jpg` | Riders, "A ready EV" | Keys being handed over |
| `rider-workshop.jpg` | Riders, "Maintenance" | **Your** technician, **your** workshop |
| `rider-banner.jpg` | Riders page | Portrait orientation, rider with bike |
| `ride-night.jpg` | Riders page | Night ride, lights on |
| `fleet-riders.jpg` | Fleet page | Fleet lined up |
| `bulk-lineup.jpg` | Fleet page | Rows of bikes, delivery-ready |
| `biz-lease.jpg` | Fleet, lease card | Fleet manager with tablet and bikes |
| `biz-own-keys.jpg` | Fleet, own card | Owner receiving keys |
| `biz-india-post.jpg` | Fleet page | India Post fleet — you have the real one |

**Shooting notes:** landscape unless marked, shoot wide so there's room to crop,
plain daylight, no filters. Phone portrait mode is fine. Send originals, not
WhatsApp-compressed copies.

---

## Images where the bike is incidental (4)

These are atmosphere rather than product, so generating them is defensible —
nothing false is being claimed about the vehicle.

- `about-green-boulevard.jpg` — tree-lined road, About page
- `biz-green-road.jpg` — green road, fleet page
- `cleaner-air-riders.webp` — clean-air section
- `careers-team-v3.jpg` — team at work, careers hero

---

## Two ways forward

**A. Real photographs.** Strongly preferred for the fourteen above. It is the only
option that puts your actual bike on your own website, and it's a day's work, not
a production.

**B. Generate using the product renders as a reference.** GPT 2.6 accepts
reference images. The renders in `circuit/data/product/Challenger 110/` are the
right source, and the prompt must spell out the Challenger's shape — exoskeleton
frame, flat bench seat, halo headlight, tubular crash guard, leading-link forks,
twin rear shocks, side cargo racks. Without that wording the model falls back on
a generic scooter whatever references it is given. Even done well the bike is a
likeness, not a photograph of your product.

Since the bike in the current images is already right, there is **no urgency**
here. Replace them as real photographs come in, file by file. The filenames stay
the same, so each swap is a drop-in with no code change.
