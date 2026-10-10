// Site-wide settings: navigation, product categories and colour families.

const navigation = [
  { label: "Home", href: "/", key: "home" },
  { label: "Tinting Centers", href: "/tinting-center", key: "tinting-center" },
  {
    label: "About Us",
    key: "about",
    children: [
      { label: "About Aeropolish", href: "/about-us" },
      { label: "News", href: "/news" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Products",
    key: "products",
    children: [
      { label: "Interior Paints", href: "/interior-paints" },
      { label: "Exterior Paints", href: "/exterior-paints" },
      { label: "Industrial Paints", href: "/industrial-paints" },
      { label: "Ink", href: "/ink" },
      { label: "Alkyd", href: "/alkyd" },
    ],
  },
  {
    label: "Colors",
    key: "colors",
    children: [
      { label: "Our Colors", href: "/our-colors" },
      { label: "Color Trends", href: "/color-trends" },
      { label: "Color Visualizer", href: "/color-visualizer" },
    ],
  },
];

const footerLinks = {
  products: navigation[3].children,
  colors: [
    { label: "Our Colors", href: "/our-colors" },
    { label: "Color Visualizer", href: "/color-visualizer" },
    { label: "Color Trends", href: "/color-trends" },
  ],
  support: [
    { label: "Catalogs", href: "/catalogs" },
    { label: "Tinting Centers", href: "/tinting-center" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/#contact" },
    { label: "Careers", href: "/careers" },
    { label: "Client Inquiry", href: "/client" },
    { label: "Become a Vendor", href: "/vendor" },
    { label: "Investor Relations", href: "/investor" },
  ],
};

// Product category pages, keyed by URL slug (matches mainCategory.slug in data/products.json)
const productCategories = {
  "interior-paints": {
    title: "Interior Paints",
    description:
      "Transform your indoor spaces with our premium interior paint solutions",
    heroImage: "/prodcuts-bg/interior-paints-pachin.webp",
    allLabel: "All Interior Paint Products",
  },
  "exterior-paints": {
    title: "Exterior Paints",
    description:
      "Protect and beautify your outdoor surfaces with our durable exterior paint solutions",
    heroImage: "/prodcuts-bg/extrior-paints-pachin.webp",
    allLabel: "All Exterior Paint Products",
  },
  "industrial-paints": {
    title: "Industrial Paints",
    description:
      "Heavy-duty protection for industrial environments and specialized applications",
    heroImage: "/prodcuts-bg/industrial-paints-pachin.webp",
    allLabel: "All Industrial Paint Products",
  },
  ink: {
    title: "Ink",
    description:
      "High-quality printing inks for various industrial and commercial applications",
    heroImage: "/prodcuts-bg/inks-pachin.webp",
    allLabel: "All Ink Products",
  },
  alkyd: {
    title: "Alkyd",
    description:
      "High-performance alkyd resins for superior coating applications and durability",
    heroImage: "/prodcuts-bg/alkyd-pachin.webp",
    allLabel: "All Alkyd Products",
  },
};

// Product tag name -> icon in public/tags (most are the slugified name)
const tagIconOverrides = {
  "Yellowing Resistance": "non-yellowing",
};

function tagIcon(tag) {
  const file =
    tagIconOverrides[tag] ||
    tag
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  return `/tags/${file}.svg`;
}

// Colour families on Our Colors / Color Visualizer, in display order
const colorFamilies = [
  { type: "off-white", label: "Off White", swatch: "#F5F5F5" },
  { type: "yellow", label: "Yellow", swatch: "#FFC107" },
  { type: "lime", label: "Lime", swatch: "#32CD32" },
  { type: "orange", label: "Orange", swatch: "#F28E16" },
  { type: "red", label: "Red", swatch: "#E4032F" },
  { type: "green", label: "Green", swatch: "#3F993F" },
  { type: "teal", label: "Teal", swatch: "#2FAF9F" },
  { type: "blue", label: "Blue", swatch: "#4376A3" },
  { type: "violet", label: "Violet", swatch: "#745184" },
  { type: "neutral", label: "Neutral", swatch: "#8F9293" },
];

module.exports = {
  siteName: "Aeropolish",
  description:
    "Aeropolish Paints & Coating Industry — reliable, performance-oriented and value-driven coatings for industrial, commercial, infrastructure and decorative applications.",
  navigation,
  footerLinks,
  productCategories,
  tagIcon,
  colorFamilies,
};
