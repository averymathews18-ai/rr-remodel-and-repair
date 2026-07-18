/* ============================================================
   SINGLE SOURCE OF TRUTH — R & R Remodel and Repair
   ------------------------------------------------------------
   All real business content lives here. Contact info + services
   are from the business card; photos are the company's real
   projects in /public/gallery.

   NOTE: A few items are reasonable inferences, not stated on the
   card — marked ⟨verify⟩. Update them if needed:
     • serviceArea ("Southwest Florida" — inferred from the 419 area code)
     • "Locally owned & operated"
   ============================================================ */

export type Service = {
  icon: IconKey;
  title: string;
  description: string;
  points: string[];
};

export type GalleryItem = {
  title: string;
  tag: string;
  before: string;
  after: string;
  blurb: string;
};

export type WorkItem = { src: string; tag: string; title: string; portrait?: boolean };

export type IconKey =
  | "kitchen"
  | "bath"
  | "flooring"
  | "tile"
  | "paint"
  | "saw"
  | "build"
  | "consult"
  | "design"
  | "reveal";

export const site = {
  /* ---- Identity ------------------------------------------- */
  name: "R & R Remodel and Repair",
  shortName: "R & R",
  tagline: "Remodel & Repair Done Right",
  description:
    "R & R Remodel and Repair — kitchen and bathroom remodeling, flooring, tile, painting, drywall, carpentry, and home repair. Quality craftsmanship and free estimates in Southwest Florida.",
  keywords: [
    "remodeling",
    "kitchen remodeling",
    "bathroom remodeling",
    "home repair",
    "tile work",
    "flooring",
    "carpentry",
    "painting and drywall",
    "Southwest Florida",
  ],

  /* ---- Contact (from business card) ----------------------- */
  phoneDisplay: "(419) 279-1783",
  phoneHref: "tel:+14192791783",
  email: "rrremodelrepair@gmail.com",
  serviceArea: "Proudly serving Southwest Florida", // confirmed by owner
  freeEstimate: "Call us for a free estimate!",

  /* ---- Navigation ----------------------------------------- */
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  /* ---- Hero ----------------------------------------------- */
  hero: {
    kicker: "Remodel & Repair",
    // The words wrapped in * * render in the bronze gradient.
    headline: "Your home, *remodeled & repaired* right.",
    sub: "From full kitchen and bath remodels to everyday home repairs, R & R does quality work across Southwest Florida — one call for all of it.",
    primaryCta: "Get a Free Estimate",
    secondaryCta: "See our work",
  },

  /* ---- Trust strip (honest, no invented numbers) ---------- */
  stats: [
    { value: "Free", label: "In-home estimates" },
    { value: "7+", label: "Services offered" },
    { value: "A–Z", label: "Repairs to remodels" },
    { value: "SW Florida", label: "Locally based" }, // ⟨verify service area⟩
  ],

  /* ---- Services (from business card) ---------------------- */
  services: [
    {
      icon: "kitchen",
      title: "Kitchen Remodeling",
      description:
        "Full kitchen transformations — cabinets, countertops, backsplashes, and layouts built around how you actually live.",
      points: ["Custom cabinetry", "Counters & backsplash", "Full layouts"],
    },
    {
      icon: "bath",
      title: "Bathroom Remodeling",
      description:
        "Updated, functional bathrooms with quality tile, fixtures, and finishes made to hold up for years.",
      points: ["Tubs & showers", "Vanities & fixtures", "Tile surrounds"],
    },
    {
      icon: "flooring",
      title: "Floor Covering",
      description:
        "New floors that reset an entire room — hardwood, luxury vinyl plank, and laminate, installed clean and level.",
      points: ["Hardwood & LVP", "Laminate", "Subfloor prep"],
    },
    {
      icon: "tile",
      title: "Tile Work",
      description:
        "Precise tile for backsplashes, floors, showers, and accents — set straight, grouted clean, and built to last.",
      points: ["Backsplashes", "Floors & showers", "Custom patterns"],
    },
    {
      icon: "paint",
      title: "Painting & Drywall",
      description:
        "Smooth walls and crisp lines — drywall hang and repair, texture, and a fresh, durable paint finish.",
      points: ["Drywall & patching", "Interior painting", "Texture & finish"],
    },
    {
      icon: "saw",
      title: "Carpentry",
      description:
        "Skilled carpentry — trim, built-ins, framing, and the finish details that make a project feel truly custom.",
      points: ["Trim & millwork", "Built-ins", "Framing & repair"],
    },
    {
      icon: "build",
      title: "Home Repair",
      description:
        "The fixes that keep a home in top shape — big and small. One honest call for the repairs on your list.",
      points: ["Handyman work", "Fixture swaps", "Honest assessments"],
    },
  ] satisfies Service[],

  /* ---- Before / After showcase (real projects) ------------ */
  gallery: [
    {
      title: "Oak & laminate → cherry & granite",
      tag: "Kitchen Remodel",
      before: "/gallery/cherry-before.jpg",
      after: "/gallery/cherry-after.jpg",
      blurb:
        "Out with the honey-oak cabinets and mustard laminate — in with rich cherry cabinetry, speckled granite counters, a full stone-tile backsplash, and warm wood-look flooring.",
    },
    {
      title: "Dated galley → bright & bold",
      tag: "Kitchen Refresh",
      before: "/gallery/white-before.jpg",
      after: "/gallery/white-after.jpg",
      blurb:
        "A compact kitchen reborn: refreshed cabinets, a striking black hexagon-tile backsplash, and clean modern fixtures completely changed the feel of the room.",
    },
    {
      title: "Closed & dated → open gray shaker",
      tag: "Kitchen Remodel",
      before: "/gallery/gray-before.jpg",
      after: "/gallery/gray-after.jpg",
      blurb:
        "Gray shaker cabinets, quartz counters, a white herringbone backsplash, and fresh flooring opened this tired space into a bright, modern open-concept kitchen.",
    },
  ] satisfies GalleryItem[],

  /* ---- Recent finished work (real photos) ----------------- */
  recentWork: [
    { src: "/gallery/work-cherry-1.jpg", tag: "Kitchen", title: "Cherry cabinets & granite peninsula", portrait: true },
    { src: "/gallery/work-gray-2.jpg", tag: "Kitchen", title: "Open-concept gray shaker", portrait: true },
    { src: "/gallery/work-cherry-3.jpg", tag: "Tile & Counters", title: "Stone backsplash & granite" },
    { src: "/gallery/work-gray-3.jpg", tag: "Tile Work", title: "Herringbone subway backsplash" },
    { src: "/gallery/work-gray-1.jpg", tag: "Flooring", title: "Plank flooring & stainless", portrait: true },
    { src: "/gallery/work-cherry-2.jpg", tag: "Kitchen", title: "Cherry kitchen & dining nook", portrait: true },
  ] satisfies WorkItem[],

  /* ---- Process (honest, free-estimate led) ---------------- */
  process: [
    {
      icon: "consult",
      title: "Free Estimate",
      description:
        "Call or email and we'll come take a look, talk through your ideas, and give you an honest, no-obligation estimate.",
    },
    {
      icon: "design",
      title: "Plan & Materials",
      description:
        "We help you settle the layout, materials, and finishes so the scope and the price are clear before any work begins.",
    },
    {
      icon: "build",
      title: "Skilled Work",
      description:
        "Our crew does the work cleanly and keeps you in the loop — treating your home with care from start to finish.",
    },
    {
      icon: "reveal",
      title: "Walkthrough",
      description:
        "We walk the finished project with you and handle the final details until you're genuinely happy with the result.",
    },
  ],

  /* ---- About ---------------------------------------------- */
  about: {
    kicker: "Who we are",
    headline: "Local remodel & repair, done *the right way*.",
    body: [
      "R & R Remodel and Repair is a local remodeling and repair company — handling everything from quick home repairs to full kitchen and bathroom remodels.",
      "Kitchens, baths, flooring, tile, painting, drywall, and carpentry — it's all one call. We show up, do quality work, and treat your home like it's our own.",
    ],
    highlights: [
      "One call for repairs to full remodels",
      "Free, no-obligation estimates",
      "Quality materials & clean workmanship",
      "Locally owned & operated", // ⟨verify⟩
    ],
  },

  /* ---- Contact / quote ------------------------------------ */
  contact: {
    kicker: "Get started",
    headline: "Let's talk about your project.",
    sub: "Tell us what you have in mind and we'll get back to you with a free estimate. Big remodel or small repair — we'd love to help.",
    projectTypes: [
      "Kitchen Remodel",
      "Bathroom Remodel",
      "Flooring",
      "Tile Work",
      "Painting & Drywall",
      "Carpentry",
      "Home Repair",
      "Something else",
    ],
    budgets: ["Not sure yet", "Under $5,000", "$5,000–$25,000", "$25,000+"],
    // Paste a Formspree/Netlify endpoint here to receive submissions.
    // Until then the form runs in friendly demo mode.
    formEndpoint: "" as string,
  },
} as const;

export type Site = typeof site;
