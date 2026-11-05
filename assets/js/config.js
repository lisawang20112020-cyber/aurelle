/* AURELLE storefront configuration.
   Everything an owner may need to change lives here. No other file needs editing. */

window.AURELLE_CONFIG = {
  // Canonical domain used by canonical tags, hreflang and sitemap.xml.
  baseUrl: "https://aurelle.com.cn",

  email: "sales@lielectric.cn",
  phone: "+86-13362952925",
  whatsapp: "8613362952925",       // digits only, used for wa.me links

  currency: "USD",

  /* Online payment
     mode: "payment-link" -> order is placed, we email a secure payment link / invoice
     The paypalClientId / stripePaymentLink fields are placeholders: the site keeps
     collecting orders and sending a payment link until a gateway is wired into
     site.js (checkout confirmation step). */
  payments: {
    mode: "payment-link",
    paypalClientId: "",
    stripePaymentLink: ""
  },

  /* Offline payment — same accounts as JINHUA LI ELECTRIC TRADING CO., LTD */
  bank: {
    beneficiary: "JINHUA LI ELECTRIC TRADING CO., LTD",
    bankName: "BANK OF CHINA JINHUA BRANCH, JINDONG SUB-BRANCH",
    swift: "BKCHCNBJ92H",
    accounts: { USD: "392284749260", EUR: "390984762597" },
    address: "NO.183 4th floor, Jinou Road, Dongxiao Street, Jindong District, Jinhua, Zhejiang, China"
  },

  // Shipping is quoted per order; set a flat amount here if you ever want one.
  shipping: { mode: "quoted", flat: 0 }
};
