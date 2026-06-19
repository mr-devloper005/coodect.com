/**
 * Editable advertising configuration.
 *
 * This is the ONLY file you need to touch to manage ads.
 *  - Swap an ad: change the `image` path (drop your file in /public/ads) and the `href`.
 *  - Turn a slot off: set `enabled: false`.
 *  - Add a slot: copy a block and give it a new unique `id`.
 *
 * Standard IAB / social ad sizes are pre-wired below. Dummy placeholders live in
 * /public/ads and are sized exactly to each format, so your replacement images
 * will drop in without any layout changes.
 */

export type AdFormat = 'square' | 'landscape' | 'rectangle' | 'leaderboard' | 'banner'

/** Pixel dimensions + aspect ratio for each supported format. */
export const adFormats: Record<AdFormat, { width: number; height: number; label: string }> = {
  square: { width: 1200, height: 1200, label: '1200 x 1200 (Square)' },
  landscape: { width: 1200, height: 628, label: '1200 x 628 (Landscape)' },
  rectangle: { width: 300, height: 250, label: '300 x 250 (Medium Rectangle)' },
  leaderboard: { width: 728, height: 90, label: '728 x 90 (Leaderboard)' },
  // Native ratio of the current Vefogix banner — keeps the full creative visible
  // in every slot with no cropping or stretching.
  banner: { width: 1200, height: 767, label: 'Banner (native 1200 x 767)' },
}

export type AdSlot = {
  /** Unique id, used as React key and for analytics. */
  id: string
  /** Which standard size this banner is. Controls the reserved space. */
  format: AdFormat
  /** Image shown in the slot. Put your file in /public/ads and point here. */
  image: string
  /** Where a click goes. Use a full https:// URL for external advertisers. */
  href: string
  /** Accessible alt text / advertiser name. */
  alt: string
  /** Flip to false to hide the slot without deleting it. */
  enabled: boolean
}

/**
 * Ad slots grouped by the surface they appear on.
 *  - `homeSidebar`     -> sticky rail on the right of the home page (ultra-wide screens).
 *  - `homeInline`      -> full-width banner placed between the home page sections.
 *  - `detailSidebar`   -> inside the article / media-distribution detail sidebar.
 *  - `detailInline`    -> full-width leaderboard placed within detail content.
 */
export const adsConfig = {
  /** Master switch — set to false to disable every ad slot site-wide. */
  enabled: true,

  /** Small label rendered above each ad (compliance / clarity). Set '' to hide. */
  disclosureLabel: 'Advertisement',

  homeSidebar: [
    {
      id: 'home-square-1',
      format: 'banner',
      image: '/ads/vefogix-banner.jpg',
      href: 'https://vefogix.com',
      alt: 'Vefogix — Smart Link Building for Stronger Rankings',
      enabled: true,
    },
    {
      // Second rail slot — disabled so the rail doesn't repeat the same banner.
      // Put a DIFFERENT brand here later, or set enabled: true to show Vefogix twice.
      id: 'home-rectangle-1',
      format: 'banner',
      image: '/ads/vefogix-banner.jpg',
      href: 'https://vefogix.com',
      alt: 'Vefogix — Smart Link Building for Stronger Rankings',
      enabled: false,
    },
  ],

  homeInline: [
    {
      id: 'home-landscape-1',
      format: 'banner',
      image: '/ads/vefogix-banner.jpg',
      href: 'https://vefogix.com',
      alt: 'Vefogix — Smart Link Building for Stronger Rankings',
      enabled: true,
    },
  ],

  detailSidebar: [
    {
      id: 'detail-rectangle-1',
      format: 'banner',
      image: '/ads/vefogix-banner.jpg',
      href: 'https://vefogix.com',
      alt: 'Vefogix — Smart Link Building for Stronger Rankings',
      enabled: true,
    },
    {
      // Second sidebar slot — disabled so the sidebar doesn't repeat the same banner.
      // Put a DIFFERENT brand here later, or set enabled: true to show Vefogix twice.
      id: 'detail-square-1',
      format: 'banner',
      image: '/ads/vefogix-banner.jpg',
      href: 'https://vefogix.com',
      alt: 'Vefogix — Smart Link Building for Stronger Rankings',
      enabled: false,
    },
  ],

  detailInline: [
    {
      id: 'detail-leaderboard-1',
      format: 'banner',
      image: '/ads/vefogix-banner.jpg',
      href: 'https://vefogix.com',
      alt: 'Vefogix — Smart Link Building for Stronger Rankings',
      enabled: true,
    },
  ],
} satisfies {
  enabled: boolean
  disclosureLabel: string
  homeSidebar: AdSlot[]
  homeInline: AdSlot[]
  detailSidebar: AdSlot[]
  detailInline: AdSlot[]
}

export type AdSurface = 'homeSidebar' | 'homeInline' | 'detailSidebar' | 'detailInline'

/** Returns the active (enabled) slots for a surface, or [] when ads are off. */
export function getAdSlots(surface: AdSurface): AdSlot[] {
  if (!adsConfig.enabled) return []
  return adsConfig[surface].filter((slot) => slot.enabled)
}
