import Link from 'next/link'
import { adFormats, adsConfig, getAdSlots, type AdSlot, type AdSurface } from '@/editable/content/ads.config'

/**
 * Ad rendering components. Layout/markup lives here; the images, links and
 * on/off switches live in ads.config.ts so non-developers can manage campaigns.
 */

function AdDisclosure() {
  if (!adsConfig.disclosureLabel) return null
  return (
    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#9a9a9a]">
      {adsConfig.disclosureLabel}
    </span>
  )
}

/** A single banner, sized to its format so dummy and real images swap cleanly. */
export function AdBanner({ slot, className = '' }: { slot: AdSlot; className?: string }) {
  const { width, height } = adFormats[slot.format]
  const isExternal = /^https?:\/\//i.test(slot.href)
  return (
    <div className={`not-prose ${className}`}>
      <AdDisclosure />
      <Link
        href={slot.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'nofollow sponsored noopener noreferrer' : undefined}
        aria-label={slot.alt}
        className="group mt-1 block overflow-hidden rounded-md border border-[var(--editable-border)] bg-white shadow-sm transition hover:shadow-md"
      >
        <img
          src={slot.image}
          alt={slot.alt}
          width={width}
          height={height}
          loading="lazy"
          className="block h-auto w-full transition duration-300 group-hover:brightness-[1.03]"
          style={{ aspectRatio: `${width} / ${height}` }}
        />
      </Link>
    </div>
  )
}

/** Stacked column of ads — used in sidebars. Renders nothing when no slots. */
export function AdStack({ surface, className = '' }: { surface: AdSurface; className?: string }) {
  const slots = getAdSlots(surface)
  if (!slots.length) return null
  return (
    <div className={`grid gap-6 ${className}`}>
      {slots.map((slot) => (
        <AdBanner key={slot.id} slot={slot} />
      ))}
    </div>
  )
}

/**
 * Sticky right-hand ad rail for the home page. The content column is centered at
 * ~1180px, so the rail only appears once the viewport is wide enough for it to
 * sit in the side gutter WITHOUT overlapping content (~1820px+). On narrower
 * screens the home page instead shows the in-flow `AdHomeBand`. To change when
 * the rail appears, edit the `min-[1820px]` breakpoint below.
 */
export function AdHomeRail() {
  const slots = getAdSlots('homeSidebar')
  if (!slots.length) return null
  return (
    <aside
      aria-label="Advertisements"
      className="pointer-events-none fixed right-6 top-28 z-30 hidden w-[300px] min-[1820px]:block"
    >
      <div className="pointer-events-auto grid max-h-[calc(100vh-8rem)] gap-6 overflow-y-auto pb-4">
        {slots.map((slot) => (
          <AdBanner key={slot.id} slot={slot} />
        ))}
      </div>
    </aside>
  )
}

/** In-flow home page ad band — visible on all screen sizes. */
export function AdHomeBand({ className = '' }: { className?: string }) {
  const slots = getAdSlots('homeInline')
  if (!slots.length) return null
  return (
    <div className={`mx-auto max-w-[var(--editable-container)] px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="grid gap-6">
        {slots.map((slot) => (
          <div key={slot.id} className="mx-auto w-full max-w-3xl">
            <AdBanner slot={slot} />
          </div>
        ))}
      </div>
    </div>
  )
}

/** Full-width inline leaderboard band, centered within the content container. */
export function AdInlineBand({ className = '' }: { className?: string }) {
  const slots = getAdSlots('detailInline')
  if (!slots.length) return null
  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      {slots.map((slot) => (
        <div key={slot.id} className="w-full max-w-[728px]">
          <AdBanner slot={slot} />
        </div>
      ))}
    </div>
  )
}
