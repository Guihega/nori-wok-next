export const siteConfig = {
  name: "Nori Wok",
  shortName: "Nori Wok",
  description:
    "Comida oriental preparada al momento: bowls, ramen, sushi y platillos al wok con pedidos rápidos por WhatsApp.",
  url: "https://www.noriwok.mx",
  locale: "es_MX",
  currency: "MXN",
  whatsappNumber: "520000000000",
  phoneDisplay: "+52 000 000 0000",
  email: "hola@noriwok.mx",
  address: "Av. Principal 123, Col. Centro, Ciudad, Estado",
  mapUrl: "https://maps.google.com",
  schedule: {
    weekdays: "Lun–Sáb · 1:00 p. m.–10:00 p. m.",
    sunday: "Dom · 2:00 p. m.–9:00 p. m.",
  },
} as const;

export const formatMoney = (value: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: siteConfig.currency,
    maximumFractionDigits: 0,
  }).format(value);
