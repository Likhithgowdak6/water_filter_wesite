// src/data/imageMapping.ts
// =====================================================
// SHOWERFIT — IMAGE ASSET MAPPING
// =====================================================
// Every image has been individually inspected and
// categorized by visual content. Paths reference
// the /public/images/ directory.

// Base path for GitHub Pages subfolder deployment
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/water_filter_wesite' : '';

const rawImages = {

  // -----------------------------------------------
  // HERO SECTION
  // -----------------------------------------------
  hero: {
    // Premium chrome filter unit alone on stone surface — strongest product shot
    productPrimary: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (13).jpeg',
    // Cinematic woman under dark square rain shower (dark marble wall)
    lifestylePrimary: '/images/WhatsApp Image 2026-11-01 at 5.02.31 PM (4).jpeg',
    // Dark dramatic shower with warm light — secondary hero option
    showerDramatic: '/images/WhatsApp Image 2026-11-01 at 5.02.31 PM (2).jpeg',
  },

  // -----------------------------------------------
  // PRODUCT — MAIN PHOTOGRAPHY
  // -----------------------------------------------
  product: {
    // Clean product photo on white bg with accessories box
    withBox: '/images/WhatsApp Image 2026-11-01 at 5.02.31 PM.jpeg',
    // Standalone filter unit clean on grey bg (frontal)
    standalone: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM.jpeg',
    // Chrome filter on stone surface — editorial hero quality
    onStone: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (13).jpeg',
    // Chrome exterior only, compact (white bg)
    chromeExterior: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (12).jpeg',
    // Cut-away view showing internal filter layers
    cutaway: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (10).jpeg',
  },

  // -----------------------------------------------
  // FILTER / CARTRIDGE CLOSE-UPS
  // -----------------------------------------------
  filter: {
    // Multicoloured filter media layers (chrome casing cut-open view)
    cartridgeDetailed: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (16).jpeg',
    // Dense cut-away 3D of replacement cartridge layers
    cartridgeCutaway: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (17).jpeg',
    // White replacement cartridge cross-section cut (blue bg)
    cartridgeWhite: '/images/WhatsApp Image 2026-11-01 at 5.02.34 PM.jpeg',
    // 20-stage spec sheet (annotated with material names)
    specSheet: '/images/WhatsApp Image 2026-11-01 at 5.02.31 PM (17).jpeg',
  },

  // -----------------------------------------------
  // INSTALLATION PHOTOGRAPHS
  // -----------------------------------------------
  installation: {
    // Hands attaching filter to shower head (real install photo)
    step2Hands: '/images/WhatsApp Image 2026-11-01 at 5.02.35 PM (8).jpeg',
    // Installation diagram with blue rotation arrows (filter on arm)
    step2Diagram: '/images/installation-diagram.jpg',
    // Filter installed on wall arm with shower head, water flowing
    step3Installed: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (14).jpeg',
    // Installed dark bg, water flowing through head — dramatic
    step3Dark: '/images/WhatsApp Image 2026-11-01 at 5.02.35 PM (9).jpeg',
    // Installation diagram with shower arm (from side)
    diagramSide: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (15).jpeg',
  },

  // -----------------------------------------------
  // LIFESTYLE — SHOWER & BATHROOM
  // -----------------------------------------------
  lifestyle: {
    // Woman in marble bathroom shower, eyes closed, content
    womanMarbleShower: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (9).jpeg',
    // Woman holding shower head near face, warm marble bathroom
    womanHandheld: '/images/WhatsApp Image 2026-11-01 at 5.02.35 PM (2).jpeg',
    // Modern white Scandinavian bathroom with shower setup
    modernBathroom: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (7).jpeg',
    // Shower head close-up flowing water (bright, clean)
    showerHeadBright: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (8).jpeg',
    // Dark shower head with clean water falling beautifully
    showerDark: '/images/WhatsApp Image 2026-11-01 at 5.02.31 PM (2).jpeg',
    // Water droplets on shower glass, warm morning light
    showerGlassMorning: '/images/WhatsApp Image 2026-11-01 at 5.02.35 PM.jpeg',
  },

  // -----------------------------------------------
  // LIFESTYLE — SKIN & FACE
  // -----------------------------------------------
  skin: {
    // Close-up woman washing face in shower, water splashing
    washingFace: '/images/WhatsApp Image 2026-11-01 at 5.02.31 PM (10).jpeg',
    // Woman touching glowing skin after shower (towel turban)
    glowingSkin: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (6).jpeg',
    // Woman in bathrobe smiling, touching face by bright window
    afterShowerBathrobe: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (19).jpeg',
    // Woman touching face with golden water drops falling (cutout)
    goldenSkin: '/images/WhatsApp Image 2026-11-01 at 5.02.31 PM (9).jpeg',
  },

  // -----------------------------------------------
  // LIFESTYLE — HAIR & SCALP
  // -----------------------------------------------
  hair: {
    // Woman combing wet hair, white bathrobe, warm marble bathroom
    brushingHair: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (4).jpeg',
    // Woman touching healthy scalp, voluminous brown hair
    scalp: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (5).jpeg',
    // Woman washing dark hair in shower (Indian-looking, editorial)
    washingHair: '/images/WhatsApp Image 2026-11-01 at 5.02.35 PM (1).jpeg',
    // Woman in shower washing hair lathering shampoo
    shampoo: '/images/WhatsApp Image 2026-11-01 at 5.02.33 PM.jpeg',
    // Woman rinsing hair, water flowing through it, warm light
    rinsingHair: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (18).jpeg',
  },

  // -----------------------------------------------
  // PROBLEM SECTION — RELATABLE EVERYDAY CONCERNS
  // -----------------------------------------------
  problems: {
    // Woman with tangled hair looking upset (hair brush in hand)
    tangledHair1: '/images/WhatsApp Image 2026-11-01 at 5.02.34 PM (1).jpeg',
    // Woman aggressively brushing tangled hair, grimacing
    tangledHair2: '/images/WhatsApp Image 2026-11-01 at 5.02.34 PM (5).jpeg',
    // Woman scratching dry/itchy scalp, concerned look
    itchyScalp: '/images/WhatsApp Image 2026-11-01 at 5.02.34 PM (6).jpeg',
    // Woman looking at dry skin in mirror after shower
    drySkin: '/images/WhatsApp Image 2026-11-01 at 5.02.34 PM (2).jpeg',
    // Close-up dry flaky peeling skin on face
    drySkinCloseup: '/images/WhatsApp Image 2026-11-01 at 5.02.35 PM (6).jpeg',
    // Dry frizzy unruly hair photographed from behind
    frizzyHair: '/images/WhatsApp Image 2026-11-01 at 5.02.35 PM (7).jpeg',
    // Hard water mineral scale deposits on bathroom tap
    waterScale: '/images/WhatsApp Image 2026-11-01 at 5.02.34 PM (4).jpeg',
    // Water marks / hard water deposits on shower glass
    showerGlassScale: '/images/WhatsApp Image 2026-11-01 at 5.02.35 PM (5).jpeg',
    // Contaminated / murky, rusty unfiltered tap water
    pollutedWater: '/images/contaminated-water.jpg',
  },

  // -----------------------------------------------
  // BENEFITS SECTION — POSITIVE OUTCOMES
  // -----------------------------------------------
  benefits: {
    // Woman smiling, washing hair, happy in shower
    happyShower: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (18).jpeg',
    // Woman with towel turban glowing skin
    radiantSkin: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (6).jpeg',
    // Woman touching healthy scalp with clean, voluminous hair
    healthyScalp: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (5).jpeg',
    // Woman in bathrobe applying lotion, serene bathroom
    afterCare: '/images/WhatsApp Image 2026-11-01 at 5.02.34 PM (7).jpeg',
    // Mother washing child — whole family benefit
    familyCare: '/images/WhatsApp Image 2026-11-01 at 5.02.35 PM (3).jpeg',
    // Woman in marble shower, content and relaxed
    comfortableShower: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (9).jpeg',
  },

  // -----------------------------------------------
  // PURCHASE / CTA SECTION
  // -----------------------------------------------
  purchase: {
    productMain: '/images/WhatsApp Image 2026-11-01 at 5.02.32 PM (13).jpeg',
  },

  // -----------------------------------------------
  // FINAL CTA SECTION
  // -----------------------------------------------
  finalCta: {
    // Water droplets on shower glass, warm morning light — cinematic
    background: '/images/WhatsApp Image 2026-11-01 at 5.02.35 PM.jpeg',
    // Cinematic dark shower, woman showering
    lifestyle: '/images/WhatsApp Image 2026-11-01 at 5.02.31 PM (12).jpeg',
  },

} as const;

function withBasePath<T>(obj: T): T {
  if (typeof obj === 'string') {
    return (obj.startsWith('/') ? encodeURI(`${BASE_PATH}${obj}`) : obj) as unknown as T;
  }
  if (typeof obj === 'object' && obj !== null) {
    const res: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) {
      res[k] = withBasePath(v);
    }
    return res as unknown as T;
  }
  return obj;
}

export const IMAGES = withBasePath(rawImages);

// Product configuration — editable central data
export const PRODUCT = {
  name: 'ShowerFit 20-Stage Shower Filter',
  tagline: 'Bring advanced shower water filtration into your everyday self-care routine with ShowerFit’s 20-stage shower filter.',
  // Pricing configuration — update with verified launch price
  price: '₹2,499',
  priceDisplay: '₹2,499',
  priceNote: 'Introductory Launch Price',
  isPriceConfigurablePlaceholder: true,
  
  // WhatsApp order destination — replace with active business number (e.g. 919876543210)
  whatsappNumber: '919999999999',
  
  // Dynamic URL with proper URL encoding
  get whatsappUrl() {
    const msg = `Hi ShowerFit! I am interested in ordering the ${this.name} (${this.priceDisplay}). Please share ordering and delivery details.`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  },

  ctaContactUrl: '#contact',
  deliveryNote: 'Free delivery across India.',
};
