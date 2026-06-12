import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, Bookmark, Search, Share2, TrendingUp } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function getExcerpt(post?: SitePost | null, limit = 130) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function statSeed(index: number) {
  return {
    reads: '2 min read',
    views: index % 3 === 0 ? '2.7K views' : index % 3 === 1 ? '1.6K views' : '820 views',
    saves: index % 2 === 0 ? 'Saves 892' : 'Saves 687',
  }
}

function MetaRow({ index, light = false }: { index: number; light?: boolean }) {
  const stat = statSeed(index)
  return (
    <div className={`flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-[11px] font-black uppercase ${light ? 'border-white/20 text-white' : 'border-black/10 text-slate-600'}`}>
      <span>{stat.reads}</span>
      <span>{stat.views}</span>
      <span>{stat.saves}</span>
    </div>
  )
}

function NumberCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block rounded-lg bg-white p-4 shadow-[0_8px_22px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#dde3ea] text-lg font-black text-[#07101f]">{index + 1}</span>
        <h3 className="line-clamp-2 min-h-12 text-base font-black leading-tight tracking-tight text-[#2f313a]">{post.title}</h3>
      </div>
      <div className="mt-4">
        <MetaRow index={index} />
      </div>
    </Link>
  )
}

function ImageStory({ post, href, index, size = 'normal' }: { post: SitePost; href: string; index: number; size?: 'large' | 'normal' }) {
  const large = size === 'large'
  return (
    <Link href={href} className={`group relative block overflow-hidden rounded-lg bg-[#17181d] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] ${large ? 'min-h-[480px]' : 'min-h-[240px]'}`}>
      <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.52)_48%,rgba(0,0,0,0.82)_100%)]" />
      <div className={`relative z-10 flex h-full min-h-[inherit] flex-col justify-end ${large ? 'p-6 sm:p-8' : 'p-6'}`}>
        <span className="mb-auto flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 text-sm font-black text-[#d600b8]">
          <Bookmark className="h-5 w-5" />
        </span>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">Saved resource</p>
        <h3 className={`mt-3 line-clamp-3 font-black leading-[1.02] tracking-tight ${large ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}>{post.title}</h3>
        <p className="mt-4 line-clamp-2 max-w-2xl text-sm leading-6 text-white/78">{getExcerpt(post, large ? 160 : 105)}</p>
        <div className="mt-6">
          <MetaRow index={index} light />
        </div>
      </div>
    </Link>
  )
}

function PlainResourceCard({ post, href, index, tall = false }: { post: SitePost; href: string; index: number; tall?: boolean }) {
  return (
    <Link href={href} className={`group flex flex-col rounded-lg bg-white p-6 shadow-[0_8px_22px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] ${tall ? 'min-h-[320px]' : 'min-h-[210px]'}`}>
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4e7f5] text-[#d600b8]">
        <Share2 className="h-5 w-5" />
      </span>
      <div className="mt-auto pt-10">
        <h3 className="line-clamp-3 text-2xl font-black leading-tight tracking-tight text-[#30303a]">{post.title}</h3>
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">{getExcerpt(post, 110)}</p>
        <div className="mt-6">
          <MetaRow index={index} />
        </div>
      </div>
    </Link>
  )
}

function CompactResourceCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid grid-cols-[112px_minmax(0,1fr)] gap-4 rounded-lg bg-white p-4 shadow-[0_8px_22px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition hover:-translate-y-1">
      <img src={getEditablePostImage(post)} alt="" className="aspect-square w-full rounded-sm object-cover" />
      <div className="min-w-0">
        <h3 className="line-clamp-2 text-base font-black leading-tight text-[#30303a]">{post.title}</h3>
        <p className="mt-5 text-[11px] font-black uppercase text-slate-600">{statSeed(index).reads} · {statSeed(index).views}</p>
      </div>
    </Link>
  )
}

function SectionHeader({ title, href, action = 'View All', children }: { title: string; href: string; action?: string; children?: ReactNode }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-black tracking-tight text-[#20232d] sm:text-4xl">{title}</h2>
        {children ? <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">{children}</p> : null}
      </div>
      <Link href={href} className="inline-flex shrink-0 items-center gap-3 text-sm font-black text-[#d600b8]">
        {action} <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"><ArrowRight className="h-4 w-4" /></span>
      </Link>
    </div>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Discover ${taskLabel(primaryTask).toLowerCase()} faster.`
  const topPosts = posts.slice(0, 4)
  const feature = posts[4] || posts[0]
  const sidePosts = posts.slice(5, 7)

  return (
    <section className="bg-[#eef1f4]">
      <div className={`${dc.shell.section} py-12 lg:py-16`}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {topPosts.map((post, index) => <NumberCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#d600b8]">{pagesContent.home.hero.badge}</p>
            <h1 className="sr-only">{heroTitle}</h1>
            {feature ? <ImageStory post={feature} href={postHref(primaryTask, feature, primaryRoute)} index={0} size="large" /> : null}
          </div>
          <div className="grid gap-6">
            {sidePosts.map((post, index) => <ImageStory key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 1} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(7, 11)
  if (!railPosts.length) return null
  return (
    <section className="bg-[#eef1f4]">
      <div className={`${dc.shell.section} py-12`}>
        <SectionHeader title="Most Discussed" href={primaryRoute}>Bookmark submissions people are opening, saving, and sharing this week.</SectionHeader>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {railPosts.map((post, index) => <PlainResourceCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} tall />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const weekly = posts.slice(11, 18)
  if (!weekly.length) return null
  return (
    <section className="bg-[#eef1f4]">
      <div className={`${dc.shell.section} py-12`}>
        <SectionHeader title="Top Weekly" href={primaryRoute}>High-signal SBM resources grouped for quick scanning.</SectionHeader>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
          {weekly.slice(0, 2).map((post, index) => <ImageStory key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} size="large" />)}
          <div className="grid gap-5">
            {weekly.slice(2, 5).map((post, index) => <CompactResourceCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 2} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sectionPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(18)
  const cards = sectionPosts.length ? sectionPosts.slice(0, 12) : posts.slice(0, 12)
  return (
    <section className="bg-[#eef1f4]">
      <div className={`${dc.shell.section} py-12`}>
        <SectionHeader title="Social Bookmarking" href={primaryRoute} action="See More SBM">
          Browse useful sites, submission references, and curated resources without the stretched layout.
        </SectionHeader>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((post, index) => (
            <CompactResourceCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
        <form action="/search" className="mx-auto mt-12 flex max-w-xl rounded-lg bg-white p-2 shadow-sm ring-1 ring-black/5">
          <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 text-sm font-bold outline-none placeholder:text-slate-400" />
          <button className="inline-flex items-center gap-2 rounded-lg bg-[#17181d] px-5 py-3 text-sm font-black text-white"><Search className="h-4 w-4" /> Search</button>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[#30303c] text-white">
      <div className={`${dc.shell.section} py-16`}>
        <div className="grid gap-8 rounded-lg bg-[#17181d] p-8 shadow-[0_22px_60px_rgba(0,0,0,0.18)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#f2a0ff]"><TrendingUp className="h-4 w-4" /> Curated SBM workspace</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Submit, organize, and discover social bookmarks with a cleaner resource flow.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">Use the publishing workspace for new bookmarks, or contact us for collection support, corrections, and resource partnerships.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/create" className="inline-flex items-center justify-center rounded-lg bg-[#d600b8] px-6 py-3 text-sm font-black text-white">Create bookmark</Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3 text-sm font-black text-white">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
