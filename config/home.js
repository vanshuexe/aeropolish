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
    slides: [
      "/new-images/hero-1.jpg",
      "/new-images/hero-2.jpg",
      "/new-images/hero-4.jpg",
      "/new-images/hero-5.jpg",
    ],
  },

  productTiles: [
    {
      label: "Interior Paints",
      href: "/interior-paints",
      image: "/new-images/product-interior.jpg",
      tagline: "Luxury Emulsions & Washable Finishes",
      badge: "Interior",
      categoryKey: "interior",
    },
    {
      label: "Exterior Paints",
      href: "/exterior-paints",
      image: "/new-images/product-exterior.jpg",
      tagline: "All-Weather Shields & UV Defense",
      badge: "Exterior",
      categoryKey: "exterior",
    },
    {
      label: "Industrial Paints",
      href: "/industrial-paints",
      image: "/new-images/product-industrial.jpg",
      tagline: "High-Performance Epoxy & Protective Coatings",
      badge: "Industrial",
      categoryKey: "industrial",
    },
    {
      label: "Inks",
      href: "/ink",
      image: "/new-images/product-inks.jpg",
      tagline: "Speciality Screen & Packaging Inks",
      badge: "Inks",
      categoryKey: "inks",
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
    smart: "/new-images/special-paint-effects.webp",
    shiny: "/new-images/color-trends-banner.webp",
    contact: "/new-images/contact-aeropolish.webp",
  },

  // "Stronger Prints" ink section (mobile slider; the desktop grid uses the same items)
  inks: [
    {
      label: "Offset Inks",
      category: "Commercial & Press",
      subtitle: "Books, magazines & commercial sheetfed presses",
      tag: "High Mileage",
      href: "/ink?subcategory=Offset%20Inks",
      image: "/Offset%20-.png",
    },
    {
      label: "Flexo",
      category: "Cartons & Labels",
      subtitle: "Corrugated boxes, labels & packaging reels",
      tag: "Fast Drying",
      href: "/ink?subcategory=Flexo%20%26%20Rotogravure",
      image: "/StrongerPrintsSection/Flexo.webp",
    },
    {
      label: "Silk Screen",
      category: "Precision Mesh",
      subtitle: "Graphic signage, glass & specialty tactile media",
      tag: "High Opacity",
      href: "/ink?subcategory=Silk%20Screen",
      image: "/StrongerPrintsSection/Silk%20Screen.webp",
    },
    {
      label: "Metal Coating",
      category: "Can & Packaging",
      subtitle: "Food cans, beverage tins, caps & aerosols",
      tag: "Anti-Corrosion",
      href: "/ink?subcategory=Can%20Coating",
      image: "/new-images/metal-aeropolish.png",
    },
    {
      label: "Rotogravure",
      category: "Flexible Packaging",
      subtitle: "High-volume pouches, wraps & laminate films",
      tag: "Ultra-Sharp",
      href: "/ink",
      image: "/Rectangle%20889595.png",
    },
    {
      label: "Textile",
      category: "Apparel & Fabrics",
      subtitle: "Direct-to-garment, cotton & fabric blends",
      tag: "Wash Fastness",
      href: "/ink",
      image: "/Tixtile.png",
    },
  ],

  contactCategories: [
    { value: "interior-paints", label: "Interior Paints" },
    { value: "exterior-paints", label: "Exterior Paints" },
    { value: "industrial-paints", label: "Industrial Paints" },
    { value: "inks", label: "Inks" },
  ],
  defaultCountryCode: "+91",
};
