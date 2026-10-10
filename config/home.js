// Content for the home page sections. Edit text and images here.

const STORAGE = "https://storage.googleapis.com/pachin/home";

module.exports = {
  hero: {
    title: "From Industrial Coatings to Everyday Paints.",
    subtitle:
      "Reliable, performance-oriented and value-driven coatings for industrial, commercial, infrastructure and decorative applications.",
    button: {
      label: "Explore Now",
      href: "/interior-paints",
      icon: `${STORAGE}/hero/icon-button-pachin.png`,
    },
    slides: [1, 4, 5, 6, 7].map(
      (n) => `${STORAGE}/hero/Rectangle%201%20%28${n}%29.webp`,
    ),
  },

  productTiles: [
    {
      label: "Interior Paints",
      href: "/interior-paints",
      image: `${STORAGE}/products/Rectangle%205.avif`,
    },
    {
      label: "Exterior Paints",
      href: "/exterior-paints",
      image: `${STORAGE}/products/Rectangle%206.avif`,
    },
    {
      label: "Industrial Paints",
      href: "/industrial-paints",
      image: `${STORAGE}/products/Rectangle%207.avif`,
    },
    {
      label: "Inks",
      href: "/ink",
      image: `${STORAGE}/products/Rectangle%208.avif`,
    },
    {
      label: "Alkyd",
      href: "/alkyd",
      image: `${STORAGE}/products/Rectangle%209.avif`,
    },
  ],

  creativitySlides: [
    "2%20(2)%20(2)",
    "2%20(6)%20(2)",
    "2%20(3)%20(2)",
    "2%20(8)%20(3)",
  ].map(
    (suffix) =>
      `${STORAGE}/second-slider/interior-design-with-orange-colors-dcsjdt9qbnwjier1%20${suffix}.webp`,
  ),
  creativityOverlay: `${STORAGE}/second-slider/03.png`,

  images: {
    smart: `${STORAGE}/image-containers/smart-pachin1.webp`,
    shiny: `${STORAGE}/image-containers/shiny-pachin.webp`,
    tinting: `${STORAGE}/image-containers/Tinting%20Centers.webp`,
    contact: `${STORAGE}/image-containers/from-pachin.webp`,
  },

  // "Stronger Prints" ink section (mobile slider; the desktop grid uses the same items)
  inks: [
    {
      label: "Offset Inks",
      href: "/ink?subcategory=Offset%20Inks",
      image: "/Offset%20-.png",
    },
    {
      label: "Flexo",
      href: "/ink?subcategory=Flexo%20%26%20Rotogravure",
      image: "/StrongerPrintsSection/Flexo.webp",
    },
    {
      label: "Silk Screen",
      href: "/ink?subcategory=Silk%20Screen",
      image: "/StrongerPrintsSection/Silk%20Screen.webp",
    },
    {
      label: "Metal Coating",
      href: "/ink?subcategory=Can%20Coating",
      image: "/Metal.png",
    },
    { label: "Rotogravure", href: "/ink", image: "/Rectangle%20889595.png" },
    { label: "Textile", href: "/ink", image: "/Tixtile.png" },
  ],

  contactCategories: [
    { value: "interior-paints", label: "Interior Paints" },
    { value: "exterior-paints", label: "Exterior Paints" },
    { value: "industrial-paints", label: "Industrial Paints" },
    { value: "inks", label: "Inks" },
    { value: "alkyd", label: "Alkyd" },
  ],
  defaultCountryCode: "+91",
};
