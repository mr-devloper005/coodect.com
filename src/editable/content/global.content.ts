import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Social bookmarking resource hub',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: '',
    primaryLinks: [
      { label: 'SBM', href: '/sbm' },
      { label: 'Search', href: '/search' },
      { label: 'Create', href: '/create' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Start exploring', href: '/' },
      secondary: { label: 'Submit', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Saved links, resources, and curated SBM posts',
    description: 'A focused social bookmarking surface for saved links, useful references, curated resources, and cleaner web discovery.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Social Bookmarking', href: '/sbm' },
          { label: 'Search Resources', href: '/search' },
          { label: 'Submit Bookmark', href: '/create' },
          { label: 'Contact Support', href: '/contact' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for clean social bookmarking discovery.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
