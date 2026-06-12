import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { Bookmark, FolderKanban, SearchCheck } from 'lucide-react'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#eef1f4] px-4 py-14 text-[#191b22] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-lg border border-[var(--editable-border)] bg-white p-8 shadow-sm lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d600b8]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">About {slot4BrandConfig.siteName}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 opacity-75">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                [Bookmark, 'SBM submissions', 'Each saved page gets clear context and an easy route to the destination.'],
                [FolderKanban, 'Curated collections', 'Resources are organized around topics, categories, and practical discovery.'],
                [SearchCheck, 'Fast lookup', 'Search and archive views help users find useful links without visual clutter.'],
              ].map(([Icon, title, body]) => (
                <div key={title as string} className="rounded-lg bg-[#eef1f4] p-4">
                  <Icon className="h-5 w-5 text-[#d600b8]" />
                  <h2 className="mt-3 text-sm font-black">{title as string}</h2>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{body as string}</p>
                </div>
              ))}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-lg border border-[var(--editable-border)] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black tracking-tight">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
