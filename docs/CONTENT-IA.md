# CONTENT-IA — Willmark Custom Homes (job 36)

Source of truth: live site https://www.willmarkhomes.com/ (Squarespace) crawled 2026-09-28.
Preference: `keep_bios_rebuild`. Palette mode: designer-choose within their spectrum.

## Look tokens (extracted from live CSS)

| Token | Value | Where seen |
|---|---|---|
| Background (page/default) | `#FFFFFF` (white theme) | body + most sections |
| Ink / text | `hsl(24,18.5%,10.6%)` ≈ `#231f1c` warm near-black | `--black-hsl` |
| Accent | `hsl(0,1.5%,60.6%)` ≈ `#999492` warm gray | `--accent-hsl` (buttons, links on white) |
| Light band | `hsl(0,1.5%,94%)` ≈ `#f0efee` | `--lightAccent-hsl` (testimonial band) |
| Dark band | `#1f1c1a` (black theme) | footer + some heroes (white logo) |
| Heading font | **Futura PT**, weight 300, letter-spacing .07em, lh 1em | `--heading-font-font-family` |
| Body font | **Europa**, weight 300, letter-spacing .18px, lh 2em | `--body-font-font-family` |
| Buttons | Futura PT, uppercase, 2px letter-spacing | primary button |
| Radius | 0 (their blocks set `--tweak-text-block-radius: 0px`) | inline CSS |

Substitute fonts (Typekit-licensed on their site): headings **Jost** (300, Futura-class
geometric), body **Mulish** (300/400, rounded humanist similar to Europa). Both on Google Fonts.

Logo: `Revised_WillmarkLogo_2018_White.png` (white wordmark + roofline) in header on dark
photo plate; dark mark on light. Both downloaded to `public/willmark/brand/`.

## FIRST SHIP routes (12) — unique layout each

| Route | Their H1/purpose | Layout intent (Space-block-derived, restyled) |
|---|---|---|
| `/` | Custom Modern Farmhouse & Ranch Homes | Hero (photo slideshow band) → intro statement → full-bleed photo band → 4-step process (numbered cards) → Homebuyer's Guide CTA band → testimonials (carousel on light) → blog teaser + subscribe |
| `/hire-us` | Let's get started on your new home! | Split: contact form (Name, Email, Subject, Message) + Sales & Design Studio card (101 S Baylor, Brenham TX 77833, (979) 865-8977) + territory counties list |
| `/designbuild` | Custom Design-Build Home Builder in Texas | Full-bleed slideshow hero → "A Home That Is Uniquely Yours" + custom-design pitch → 5-step build process (their designbuild variant) → "Have your own Plans?" CTA → 3 project cards (Round Top Manor, Carmine Abode, Creekwood Farmhouse) → copyright note |
| `/theteam` | Meet Our Team | Long intro paragraph (their words, towns they serve, founded by Brandt Wilke in 2011) → 8 team bios grid (photo, name, role) |
| `/warranty` | Warranty | Photo band → warranty form copy → warranty request form (Name, Email, Phone, Address, Project Manager's Name, List of Warranty Items) |
| `/page` | (legacy homepage copy of `/`) | Distinct treatment: photo-led "simple process" digest page — hero photo + process accordion + CTA (they keep a duplicate landing route; rebuild keeps parity without duplicating home's exact module order) |
| `/austin-county-builder` | Austin County Home Builder | County hero (Bellville - Sealy - San Felipe) + intro + 3 service cards (Farmhouse "Dream It", Ranch "Upgrade it", Custom "Customize it") + CTA |
| `/washington-county-builder` | Washington County Home Builder | Same skeleton, THEIR copy (Brenham - Burton - Latium), different hero photo |
| `/colorado-county-builder` | Colorado County Home Builder | THEIR copy (Columbus - Eagle Lake - Weimar), different hero photo |
| `/fayette-county-builder` | Fayette County Home Builder | THEIR copy (La Grange - Fayetteville - Schulenburg - Round Top), different hero photo |
| `/waller-county-builder` | Waller County Home Builder | THEIR copy (Hempstead - Brookshire - Prairie View), different hero photo |
| `/design` | Design Center | Complimentary design services copy (2 long paras) → Design Center / 1870 building story → interiors photo grid ("Our Work") |
| `/blog` | BLOG | Index of 5 visible post titles only (no per-post pages this job) |

BACKLOG: 133 more sitemap URLs (galleries, plans, cities, posts) — NOT built this job.

## Facts (from live site — no inventions)

- Turn-key custom home builder in central Texas; office "Sales & Design Studio",
  101 S Baylor, Brenham, TX 77833 (footer says 101 S Baylor St).
- Phone (979) 865-8977; email willmarkhomes@gmail.com; founded by Brandt Wilke in 2011 (per /theteam).
- Typical build time 10-12 months (per process copy). Fixed-price builder. Design services complimentary.
- Counties served: Austin, Washington, Colorado, Fayette, Waller, Lee, South Grimes, North Lavaca, Burleson.
- Towns on /theteam: Bellville, Brenham, Caldwell, Chappell Hill, Eagle Lake, Hempstead, Lexington, Navasota, Round Top, Shiner.
- 9 real testimonials with real names (use short excerpts + full text on home carousel).
- Team (8): Brandt Wilke (President), Sabrina Wilson (VP Operations), Zach Ussery (VP Construction),
  Kristin Klussmann (Director of Design), Shelby Dollar (Director of Finance), Dane Davenport (PM),
  Cal Wood (PM), Taylor Spurlock (Sales & Marketing Coordinator).
- No star ratings, no review counts, no awards, no "EST." badge beyond the 2011 founding mention in their bio copy.

## Media plan (all downloaded to public/willmark/, plain <img>)

- `brand/logo-white.webp` (header/hero on dark), `brand/logo-dark.webp` (light header/footer)
- `home/hero-*.jpg` — slideshow band photos (Roundtop_Webster_WebSize-68, Dogtrot_Finals-1,
  20230808 Willmark 0064, Bellville_Schultz_Exterior-9, Modern4K-13, Kristin_Exteriors-8, etc.)
- `team/*.jpg` — 8 portraits (KNG_9588, KNG_9199, KNG_9418, KNG_9741, KNG_1045, IMG_5988-2, DSC01080-2, Tezza-7567)
- `design/*` — 1870 building (bren.jpg), Old photo, showroom samples (IMG-2759/2760/2776/2778/2780), interiors for Our Work grid
- `county/*.jpg` — 5 county hero photos
- `designbuild/*` — slideshow + 3 project photos
- No hotlinks; omit any file that fails to download.

## Forms

- `/api/submit` only. Contact form fields (Name/Email/Subject/Message) and Warranty form
  (Name/Email/Phone/Address/PM name/Items) both post there with distinct `form` ids.
- `WEBHOOK_URL_CONTACT` / `WEBHOOK_URL_WARRANTY` env; unset → offline success.
- Lead ops contact (genesis-form-check@example.com) never rendered on the site.
