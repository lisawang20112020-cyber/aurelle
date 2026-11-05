# AURELLE storefront — aurelle.com.cn

Static jewellery store in three languages (English / 中文 / Español). No build step is
needed to publish: every page is plain HTML plus shared CSS/JS, so any static host works
(GitHub Pages, Netlify, a normal web server). Prices come from `价格连接.xlsx` (USD sell
price), company and bank details follow JINHUA LI ELECTRIC TRADING CO., LTD.

## Publish with GitHub Pages

1. Create a repository and upload **everything in this folder** to the repository root —
   `index.html` must sit at the root, together with `CNAME`, `.nojekyll`, `robots.txt`
   and `sitemap.xml`.
2. GitHub → Settings → Pages → Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. Custom domain: `aurelle.com.cn`, then tick **Enforce HTTPS**.
4. DNS at your registrar:
   - `aurelle.com.cn` → A records `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - optional `www` → CNAME `your-username.github.io`
5. Wait for the certificate, then open `https://aurelle.com.cn` and check all three
   languages: `/`, `/zh/`, `/es/`.

## Get indexed by Google

1. Google Search Console → add a **Domain** property for `aurelle.com.cn`, verify with the
   DNS TXT record.
2. Sitemaps → submit `https://aurelle.com.cn/sitemap.xml` (39 URLs, all three languages).
3. Use URL Inspection on `https://aurelle.com.cn/` and request indexing; the Chinese and
   Spanish home pages are linked with `hreflang`, so Google picks them up from there.
4. Optional: Bing Webmaster Tools accepts the same sitemap.

Note: `aurelle.com.cn` is a mainland-China domain. If the site is hosted outside China it
will load normally worldwide; if you later host it inside China, an ICP filing is required.

## Shop structure

| Path | Content |
| --- | --- |
| `/` `/zh/` `/es/` | home page per language |
| `/collections/earrings.html` etc. | E / H / N collections |
| `/products/e01.html` … `n01.html` | six product pages with gallery, specs, variants |
| `/cart.html`, `/checkout.html` | bag and order form |
| `/about.html`, `/contact.html`, `/shipping.html` | brand, contact, shipping & payment |
| `/404.html`, `/zh/404.html`, `/es/404.html` | not-found pages |

Every page carries its own title, description, canonical, `hreflang` (en / zh-Hans / es /
x-default) and Product or Organization structured data. `robots.txt` keeps `cart` and
`checkout` out of the index.

## Payments

`assets/js/config.js` holds every setting an owner may need:

- `payments.mode = "payment-link"` (current): the customer places the order, the shop
  receives it by email / WhatsApp and replies with a secure PayPal or Stripe link.
  No card data touches the site.
- `paypalClientId` and `stripePaymentLink` are reserved placeholders. To take money
  automatically, wire the chosen gateway into the confirmation step of
  `assets/js/site.js` — no other file needs editing.
- `bank`: the offline T/T account shown on checkout and on the shipping page
  (Beneficiary / Bank / SWIFT / USD and EUR accounts, same as LI ELECTRIC).

Orders are written to the customer's browser (`aurelle.orders.v1`) and sent to
sales@lielectric.cn with the "Send order by email" button or by WhatsApp from the
confirmation page. There is no server, so nothing is stored remotely; connect a form
service or a payment gateway if you want orders captured automatically.

## Editing content

The generator scripts are kept on the shop owner's machine in `website/build/` and are
not part of the upload package:

- `build/content.py` — the six products (code, USD price, specs, three-language copy) and `BASE`
- `build/ui.py` — interface wording in three languages
- `build/assets.py` — logo cut-out and product image sizing
- `build/pages.py` — regenerates all HTML, `sitemap.xml`, `robots.txt`, the catalog JS
- `build/check_site.py` — verifies 48 pages, canonicals, hreflang, links, JSON-LD

After any content change run:

    python build/pages.py
    python build/check_site.py

To change the domain, edit `BASE` in `build/content.py` and `baseUrl` in
`assets/js/config.js`, then re-run `build/pages.py` (it rewrites canonical, hreflang,
sitemap and `CNAME`).
