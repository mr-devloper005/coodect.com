import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Social bookmarking resources and saved web collections',
      description: 'Discover social bookmarking submissions, useful links, saved resources, and curated SBM collections.',
      openGraphTitle: 'Social bookmarking resources and saved web collections',
      openGraphDescription: 'Browse curated SBM links, resource collections, and useful web submissions in one focused directory.',
      keywords: ['social bookmarking', 'sbm', 'bookmark submissions', 'curated links', 'web resources'],
    },
    hero: {
      badge: 'Social bookmarking hub',
      title: ['Find, save, and share', 'high-value web resources.'],
      description: 'Browse SBM submissions, useful references, niche collections, and link-ready pages built for faster discovery.',
      primaryCta: { label: 'Browse bookmarks', href: '/sbm' },
      secondaryCta: { label: 'Submit a resource', href: '/create' },
      searchPlaceholder: 'Search bookmarks, tools, resources, and topics',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Fresh bookmark submissions shape the homepage.',
      featureCardDescription: 'Recent resources stay easy to scan with strong cards, clear metadata, and direct action paths.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for social bookmarking, resource discovery, and clean link sharing.',
      paragraphs: [
        'This site brings together bookmark submissions, resource notes, and organized discovery so visitors can move naturally between useful links.',
        'Instead of burying saved pages in plain lists, the platform presents each resource with context, categories, and scan-friendly cards.',
        'Whether someone starts with a tool, guide, directory, or reference page, they can keep discovering related SBM resources without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'SBM-first homepage with stronger emphasis on saved resources.',
        'Connected sections for bookmark collections, references, and submissions.',
        'Cleaner browsing rhythm designed to make link discovery easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse bookmarks', href: '/sbm' },
      secondaryLink: { label: 'Search resources', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore social bookmarks through one connected resource experience.',
      description: 'Move between saved links, collections, and submission details through one clearer SBM visual system.',
      primaryCta: { label: 'Browse SBM', href: '/sbm' },
      secondaryCta: { label: 'Contact Us', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A cleaner way to discover useful social bookmarks.',
    description: `${slot4BrandConfig.siteName} is built to make social bookmarking submissions, saved links, and resource discovery feel focused and trustworthy.`,
    paragraphs: [
      'Instead of splitting useful links into disconnected pages, the platform keeps related resources easy to move through and easy to understand.',
      'Whether someone starts with a tool, directory, guide, or reference page, they can continue exploring without losing context.',
    ],
    values: [
      {
        title: 'Bookmark-first experience',
        description: 'We prioritize clarity, pacing, and structure so people can scan, save, browse, and discover without noise.',
      },
      {
        title: 'Connected resource surfaces',
        description: 'Bookmarks, references, collections, and profile-connected submissions stay connected so discovery feels natural.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation and clear page structure to help visitors find useful links faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Send SBM requests, resource questions, and submission support notes.',
    description: 'Tell us what you want to publish, improve, report, or organize. We will route your bookmark and resource request through the right lane.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find saved links, resources, and SBM topics faster.',
      description: 'Use keywords, categories, and resource types to discover useful social bookmarking submissions.',
      placeholder: 'Search by keyword, tool, niche, category, or title',
    },
    resultsTitle: 'Latest searchable bookmarks',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to submit SBM resources.',
      description: 'Use your account to open the publishing workspace and create bookmark submissions for the site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a social bookmarking submission.',
      description: 'Choose the resource type, add the destination URL, and prepare a clean bookmark with category, summary, and notes.',
    },
    formTitle: 'Bookmark details',
    submitLabel: 'Submit bookmark',
    successTitle: 'Bookmark submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to continue browsing, managing submissions, and creating new social bookmarking resources from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start submitting bookmarks.',
      description: 'Create an account to access the publishing workspace, save details, and submit SBM resources through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
