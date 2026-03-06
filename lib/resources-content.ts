export type ResourceType = 'presentation' | 'demo' | 'document' | 'video'

export type ResourceAudience = 'all' | 'sales' | 'teachers' | 'admin' | 'sandbox'

export interface Resource {
  id: string
  title: string
  description: string
  type: ResourceType
  url: string           // Google Drive / Slides / YouTube / Docs share link
  tags: string[]
  audience: ResourceAudience[]
  updatedAt?: string    // e.g. "Jan 2026"
  pinRequired?: boolean // true = only accessible if user has sales/sandbox PIN context
}

// ─── Add your resources here ──────────────────────────────────────────────────
// For Google Slides: use the "Publish to web" link or the share link
// For Google Drive files: use the "Anyone with link can view" share link
// For YouTube: use the standard watch URL

export const RESOURCES: Resource[] = [
  // ── Sales ──────────────────────────────────────────────────────────────────
  {
    id: 'sales-product-deck',
    title: 'StoryHippo Product Overview',
    description:
      'Full product presentation covering our digital library, assessments, teacher tools, and literacy outcomes. Use this when pitching to school decision-makers.',
    type: 'presentation',
    url: 'https://drive.google.com/YOUR_SALES_PRODUCT_DECK_LINK',
    tags: ['product', 'pitch', 'overview'],
    audience: ['sales'],
    updatedAt: 'Jan 2026',
    pinRequired: true,
  },
  {
    id: 'sales-pricing',
    title: 'Pricing & Packages',
    description:
      'School subscription tiers, per-learner pricing, and the Sandbox pilot terms. For internal reference only.',
    type: 'document',
    url: 'https://drive.google.com/YOUR_PRICING_DOC_LINK',
    tags: ['pricing', 'packages', 'commercial'],
    audience: ['sales'],
    updatedAt: 'Jan 2026',
    pinRequired: true,
  },
  {
    id: 'sales-objection-guide',
    title: 'Objection Handling Guide',
    description:
      'Common objections from school principals and administrators, with suggested responses and supporting evidence.',
    type: 'document',
    url: 'https://drive.google.com/YOUR_OBJECTION_GUIDE_LINK',
    tags: ['objections', 'sales talk', 'scripts'],
    audience: ['sales'],
    updatedAt: 'Jan 2026',
    pinRequired: true,
  },

  // ── Platform demos ─────────────────────────────────────────────────────────
  {
    id: 'demo-platform-walkthrough',
    title: 'Platform Walkthrough Demo',
    description:
      'Full video walkthrough of the StoryHippo web platform — from school setup to a learner opening their first book.',
    type: 'video',
    url: 'https://www.youtube.com/YOUR_WALKTHROUGH_VIDEO_ID',
    tags: ['demo', 'platform', 'full tour'],
    audience: ['all'],
    updatedAt: 'Jan 2026',
  },
  {
    id: 'demo-teacher-dashboard',
    title: 'Teacher Dashboard Demo',
    description:
      'Short screen recording showing a teacher managing streams, assigning learners, and reading progress reports.',
    type: 'video',
    url: 'https://www.youtube.com/YOUR_TEACHER_DEMO_VIDEO_ID',
    tags: ['demo', 'teacher', 'dashboard'],
    audience: ['teachers', 'admin'],
    updatedAt: 'Jan 2026',
  },
  {
    id: 'demo-learner-library',
    title: 'Learner Library Demo',
    description:
      'See the learner experience: opening a book, completing a reading session, and taking a comprehension check.',
    type: 'video',
    url: 'https://www.youtube.com/YOUR_LEARNER_DEMO_VIDEO_ID',
    tags: ['demo', 'learner', 'library', 'books'],
    audience: ['teachers', 'admin', 'all'],
    updatedAt: 'Jan 2026',
  },

  // ── School setup ───────────────────────────────────────────────────────────
  {
    id: 'school-setup-guide',
    title: 'School Setup Guide (Printable)',
    description:
      'Step-by-step PDF for school admins covering account creation, teacher invites, stream setup, and learner onboarding.',
    type: 'document',
    url: 'https://drive.google.com/YOUR_SETUP_GUIDE_LINK',
    tags: ['setup', 'admin', 'printable', 'onboarding'],
    audience: ['admin', 'teachers'],
    updatedAt: 'Jan 2026',
  },
  {
    id: 'parent-letter-template',
    title: 'Parent Letter Template',
    description:
      'Editable letter template schools can send to parents introducing StoryHippo and explaining how to support reading at home.',
    type: 'document',
    url: 'https://drive.google.com/YOUR_PARENT_LETTER_LINK',
    tags: ['parents', 'communication', 'template'],
    audience: ['admin', 'teachers'],
    updatedAt: 'Jan 2026',
  },
  {
    id: 'teacher-training-deck',
    title: 'Teacher Training Presentation',
    description:
      'Slide deck for running an in-school teacher training session — covers platform basics, lesson integration, and report reading.',
    type: 'presentation',
    url: 'https://drive.google.com/YOUR_TEACHER_TRAINING_DECK_LINK',
    tags: ['teacher', 'training', 'onboarding', 'slides'],
    audience: ['teachers', 'admin'],
    updatedAt: 'Jan 2026',
  },

  // ── Sandbox pilot ──────────────────────────────────────────────────────────
  {
    id: 'sandbox-rollout-playbook',
    title: 'Sandbox Rollout Playbook',
    description:
      '2026 pilot programme playbook: school selection, rollout schedule, data collection templates, and milestone checkpoints.',
    type: 'document',
    url: 'https://drive.google.com/YOUR_SANDBOX_PLAYBOOK_LINK',
    tags: ['sandbox', 'pilot', '2026', 'rollout'],
    audience: ['sandbox'],
    updatedAt: 'Jan 2026',
    pinRequired: true,
  },
  {
    id: 'sandbox-impact-framework',
    title: 'Impact Measurement Framework',
    description:
      'How we measure literacy outcomes across sandbox schools — baseline assessments, mid-point checks, and end-of-year reporting.',
    type: 'presentation',
    url: 'https://drive.google.com/YOUR_IMPACT_FRAMEWORK_LINK',
    tags: ['sandbox', 'impact', 'data', 'measurement'],
    audience: ['sandbox'],
    updatedAt: 'Jan 2026',
    pinRequired: true,
  },
]

export const TYPE_META: Record<ResourceType, { label: string; icon: string; color: string; bg: string }> = {
  presentation: { label: 'Presentation', icon: '📊', color: '#CC0066', bg: '#fde8f4' },
  demo:         { label: 'Demo',         icon: '🎬', color: '#1565C0', bg: '#e3f2fd' },
  document:     { label: 'Document',     icon: '📄', color: '#2E7D32', bg: '#e8f5e9' },
  video:        { label: 'Video',        icon: '▶️',  color: '#E65100', bg: '#fff3e0' },
}

export const AUDIENCE_META: Record<ResourceAudience, { label: string; color: string; bg: string }> = {
  all:     { label: 'Everyone',    color: '#374151', bg: '#f3f4f6' },
  sales:   { label: 'Sales',       color: '#CC0066', bg: '#fde8f4' },
  teachers:{ label: 'Teachers',    color: '#1565C0', bg: '#e3f2fd' },
  admin:   { label: 'Admin',       color: '#2E7D32', bg: '#e8f5e9' },
  sandbox: { label: 'Sandbox',     color: '#7B2D8B', bg: '#f3e8ff' },
}
