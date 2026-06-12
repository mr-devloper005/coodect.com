'use client'

import { Bookmark, Mail, MessageSquare, ShieldCheck } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const lanes = [
  { icon: Bookmark, title: 'Bookmark submissions', body: 'Send us resources, tools, references, or curated pages that belong in the SBM archive.' },
  { icon: ShieldCheck, title: 'Correction requests', body: 'Report broken URLs, unclear categories, outdated descriptions, or duplicate bookmark entries.' },
  { icon: MessageSquare, title: 'Collection support', body: 'Ask about resource groups, niche pages, publishing workflow, and social bookmarking partnerships.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#eef1f4] text-[#191b22]">
        <section className="mx-auto grid max-w-[1180px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d600b8]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-[1.04] tracking-tight sm:text-6xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <lane.icon className="h-5 w-5 text-[#d600b8]" />
                  <h2 className="mt-3 text-xl font-black tracking-tight">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{lane.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[#17181d] px-5 py-4 text-sm font-black text-white">
              <Mail className="h-5 w-5 text-[#f2a0ff]" /> We usually route SBM requests by topic and urgency.
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-[0_24px_70px_rgba(16,36,31,0.10)] ring-1 ring-black/5 lg:p-8">
            <h2 className="text-2xl font-black tracking-tight">{pagesContent.contact.formTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Include the destination URL, category, and what you want changed or published.</p>
            <div className="mt-6">
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
