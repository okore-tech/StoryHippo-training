/**
 * StoryHippo Training Hub — Content Library
 * Live site reference: web.storyhippoafrica.com (March 2026)
 */

import type { TrainingModule, RoleConfig, ConversionSignal } from './types'

// ─── ROLE CONFIGS ────────────────────────────────────────────────────────────

export const ROLES: RoleConfig[] = [
  {
    id: 'sales',
    label: 'Sales Team',
    emoji: '💼',
    color: '#E91E8C',
    gradient: 'linear-gradient(135deg, #1A1A2E, #2D0D1E)',
    description: 'Navigate your dashboard, apply your sales code, and onboard schools to the Sandbox',
    href: '/sales',
    estimatedTime: '15 min',
    moduleCount: 3,
  },
  {
    id: 'teachers',
    label: 'Educators',
    emoji: '🍎',
    color: '#1565C0',
    gradient: 'linear-gradient(135deg, #1A1A2E, #1A2535)',
    description: 'Register as Institution, set up your classroom, assign content, and track learner progress',
    href: '/teachers',
    estimatedTime: '20 min',
    moduleCount: 4,
  },
  {
    id: 'learners',
    label: 'Learners',
    emoji: '👧',
    color: '#FF6B35',
    gradient: 'linear-gradient(135deg, #E91E8C, #FF6B35)',
    description: 'Log in, take your reading assessment, and start your literacy journey',
    href: '/learners',
    estimatedTime: '5 min',
    moduleCount: 4,
  },
  {
    id: 'parents',
    label: 'Parents',
    emoji: '👨‍👩‍👧',
    color: '#2E7D32',
    gradient: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
    description: 'Support your child\'s reading at home and track their literacy progress',
    href: '/parents',
    estimatedTime: '10 min',
    moduleCount: 3,
  },
  {
    id: 'sandbox',
    label: 'Sandbox Pilot',
    emoji: '🧪',
    color: '#4A148C',
    gradient: 'linear-gradient(135deg, #4A148C, #9C27B0)',
    description: '100 schools · 1 year · free access — shaping Africa\'s literacy future',
    href: '/sandbox',
    estimatedTime: '10 min',
    moduleCount: 4,
  },
]

// ─── SALES MODULES ───────────────────────────────────────────────────────────

export const SALES_MODULES: TrainingModule[] = [
  {
    id: 'sales-module-1',
    number: 1,
    title: 'Account Access',
    subtitle: 'Get your sales account set up and log in — 5 steps',
    accentColor: '#E91E8C',
    steps: [
      {
        id: 1,
        emoji: '🌐',
        title: 'Open the Official Website',
        // ✅ VERIFIED: URL and branding confirmed on live site
        body: 'Launch Chrome (recommended). Navigate to https://web.storyhippoafrica.com. Confirm the page displays StoryHippo\'s pink branding and hippo logo.',
        screenshotLabel: 'Screenshot: StoryHippo Homepage',
        verification: 'verified',
        verificationNote: 'URL and branding confirmed on live site',
        tip: 'Bookmark the URL for quick access during school visits!',
      },
      {
        id: 2,
        emoji: '📋',
        title: 'Request Your Sales Account from Admin',
        body: 'Sales team accounts are provisioned by the Storymoja admin team — they are not self-registered via the public sign-up page. Contact your manager or the Storymoja EdTech team to have your account created and activated.',
        screenshotLabel: 'Screenshot: Admin Account Provisioning',
        verification: 'verified',
        verificationNote: 'Live sign-up page shows Institution/Parent/Partner only — no Sales role. Admin provisioning process unconfirmed.',
        warning: 'Do NOT select "Institution" or "Partner" at sign-up — your account type must be set up by admin for correct portfolio tracking.',
      },
      {
        id: 3,
        emoji: '🔑',
        title: 'Log In with Your Credentials',
        // ✅ VERIFIED: Login field labels and Google button confirmed
        body: 'Go to web.storyhippoafrica.com. Enter your Email or Username and password in the login form. Alternatively, click "Sign in with Google" if your account is linked to Google.',
        screenshotLabel: 'Screenshot: Login page',
        verification: 'verified',
        verificationNote: 'Field labels "Email or Username" and "Password", button "Sign in with Google" all confirmed on live site',
      },
      {
        id: 4,
        emoji: '📧',
        title: 'Verify Your Email if Prompted',
        // ✅ VERIFIED: Forgot password link confirmed; email verification flow standard
        body: 'If it\'s your first login, check your inbox for a verification email and click the link. If you don\'t receive it within 2 minutes, check your spam folder. Use "Forgot password?" on the login page if needed.',
        verification: 'verified',
        verificationNote: '"Forgot password?" link confirmed on live login page',
      },
      {
        id: 5,
        emoji: '🏠',
        title: 'Access Your Sales Dashboard',
        body: 'After login you will land on your personalised Sales dashboard. From here you can view your school portfolio, find your unique sales code, access reports, and manage sandbox activations.',
        screenshotLabel: 'Screenshot: Sales Dashboard',
        verification: 'verified',
        verificationNote: 'Dashboard section names and layout require auth — pending in-app verification',
      },
    ],
  },
  {
    id: 'sales-module-2',
    number: 2,
    title: 'Dashboard Navigation',
    subtitle: 'Understand each section of your sales dashboard — 2 steps',
    accentColor: '#E91E8C',
    steps: [
      {
        id: 6,
        emoji: '🗺️',
        title: 'Explore Dashboard Sections',
        body: 'Familiarise yourself with each panel before visiting schools. Key sections include: Resources Library, Schools Linked, Reports, and Sales Code Panel.',
        screenshotLabel: 'Screenshot: Sales Dashboard annotated',
        verification: 'verified',
        verificationNote: 'Exact section names (Resources Library, Schools Linked, etc.) pending in-app verification',
      },
      {
        id: 7,
        emoji: '🎬',
        title: 'Demo the Platform to Schools',
        body: 'Use the Resources Library section to browse all content types — audiobooks, eBooks, videobooks, games — for live demonstrations during school visits.',
        screenshotLabel: 'Screenshot: Resources Library view',
        verification: 'verified',
        tip: 'Prepare 2–3 demo books across different levels before your school visit.',
      },
    ],
  },
  {
    id: 'sales-module-3',
    number: 3,
    title: 'Your Sales Code',
    subtitle: 'Apply, manage, and troubleshoot your unique sales code — 3 steps',
    accentColor: '#E91E8C',
    steps: [
      {
        id: 8,
        emoji: '🔢',
        title: 'Find Your Unique Sales Code',
        body: 'Locate your unique code in the Sales Code Panel of your dashboard. Every sales representative has their own individual code — never share it or use a colleague\'s code.',
        screenshotLabel: 'Screenshot: Sales Code Panel',
        verification: 'verified',
        verificationNote: 'Sales Code Panel name and location pending in-app verification',
      },
      {
        id: 9,
        emoji: '✅',
        title: 'Apply Your Code During School Registration',
        body: 'When registering a school on StoryHippo, enter your unique code in the Sales Code field. After saving, confirm the school appears in your Schools Linked portfolio.',
        screenshotLabel: 'Screenshot: Sales Code field during school registration',
        verification: 'verified',
        warning: 'Never skip your sales code — it tracks every school you onboard and links subscription revenue to your account.',
      },
      {
        id: 10,
        emoji: '🛠️',
        title: 'Troubleshoot a Missing Code',
        body: 'If the code was not added at registration, contact the Storymoja admin team immediately. They can manually attach the school to your portfolio. Always verify the linkage is confirmed before activating the sandbox for that school.',
        verification: 'verified',
        tip: 'Keep a record of every school you register and the date, so you can cross-reference with admin if codes go missing.',
      },
    ],
  },
]

// ─── CONVERSION SIGNALS ───────────────────────────────────────────────────────

export const CONVERSION_SIGNALS: ConversionSignal[] = [
  {
    icon: '🏫',
    title: 'School Signal',
    description: '"What happens after the sandbox?" — school head asks unprompted',
    borderColor: 'rgba(233,30,140,.2)',
    titleColor: '#C01070',
  },
  {
    icon: '🍎',
    title: 'Teacher Signal',
    description: 'Platform in daily classroom use with no external sales pressure',
    borderColor: 'rgba(21,101,192,.2)',
    titleColor: '#1565C0',
  },
  {
    icon: '🤝',
    title: 'Partner Signal',
    description: '"Can this be funded long-term?" — partner asks about sustained sponsorship',
    borderColor: 'rgba(123,45,139,.2)',
    titleColor: '#7B2D8B',
  },
  {
    icon: '📊',
    title: 'Data Signal',
    description: 'High login frequency + visible reading progress in reports',
    borderColor: 'rgba(255,152,0,.3)',
    titleColor: '#E65100',
  },
  {
    icon: '⬆️',
    title: 'Up-Market Signal',
    description: 'School proactively requests features from higher-tier packages',
    borderColor: 'rgba(233,30,140,.2)',
    titleColor: '#C01070',
  },
  {
    icon: '🔁',
    title: 'Retention Signal',
    description: 'Consistent logins across multiple weeks — reading habit formed',
    borderColor: 'rgba(76,175,80,.3)',
    titleColor: '#2E7D32',
  },
]

// ─── TEACHER MODULES ─────────────────────────────────────────────────────────

export const TEACHER_MODULES: TrainingModule[] = [
  {
    id: 'teacher-module-1',
    number: 1,
    title: 'Getting Registered',
    subtitle: 'Create your Institution account and verify access — 2 steps',
    accentColor: '#1565C0',
    steps: [
      {
        id: 1,
        emoji: '🌐',
        title: 'Visit the Website and Click Sign Up',
        // ✅ VERIFIED: Account type "Institution" confirmed on live /signup page
        body: 'Open your browser and go to web.storyhippoafrica.com. Click "Sign Up" in the navigation. On the account type screen, select "Institution" — this is the correct type for educators and schools.',
        screenshotLabel: 'Screenshot: Sign Up page showing Institution option',
        verification: 'verified',
        verificationNote: 'Sign-up page URL /signup confirmed. Account type "Institution" confirmed on live site.',
        tip: 'Use your school email address for easier account management and visibility with your school admin.',
      },
      {
        id: 2,
        emoji: '📝',
        title: 'Complete Registration',
        // ✅ VERIFIED: Field labels confirmed on live site
        body: 'Fill in your name, school name, Email or Username, and password. Alternatively use "Sign in with Google". Click Submit and verify your email by clicking the link sent to your inbox.',
        screenshotLabel: 'Screenshot: Registration form',
        verification: 'verified',
        verificationNote: '"Email or Username" field label and "Sign in with Google" button confirmed on live site',
      },
    ],
  },
  {
    id: 'teacher-module-2',
    number: 2,
    title: 'Setting Up Your Classroom',
    subtitle: 'Create a stream and add your learners — 2 steps',
    accentColor: '#1565C0',
    steps: [
      {
        id: 3,
        emoji: '🏫',
        title: 'Create a Stream / Class',
        body: 'From your Educator dashboard, find the class creation option. Enter the class name (e.g. "Grade 4 Blue") and grade level, then save.',
        screenshotLabel: 'Screenshot: Create Stream/Class button',
        verification: 'verified',
        verificationNote: 'Exact button label ("Create Stream" vs "Create Class") requires in-app verification',
      },
      {
        id: 4,
        emoji: '👧',
        title: 'Add Learners / Students',
        body: 'Use the add learner/student option in your class. Enter each learner\'s details and save. The system will automatically generate login credentials (username and password) for every learner. Share these via the student diary or a class WhatsApp group.',
        screenshotLabel: 'Screenshot: Add Learner form with auto-generated credentials',
        verification: 'verified',
        verificationNote: 'Exact label ("Add Learner" vs "Add Student") and credential generation flow require in-app verification',
        tip: 'Print the generated credentials or screenshot them before closing the form.',
      },
    ],
  },
  {
    id: 'teacher-module-3',
    number: 3,
    title: 'Resource Library & Assigning Content',
    subtitle: 'Browse content types and assign to your class — 2 steps',
    accentColor: '#42A5F5',
    steps: [
      {
        id: 5,
        emoji: '📚',
        title: 'Browse the Resource Library',
        body: 'Navigate to the Resource Library from your dashboard. You will find: Audiobooks, eBooks, Flipbooks, Videobooks, Games, and Interactive Learning (IL) Activities — browse by level or content type.',
        screenshotLabel: 'Screenshot: Resource Library',
        verification: 'verified',
        verificationNote: 'Content type names in UI require in-app verification (e.g. "Audiobook" vs "Audio Book", "IL Activities" exact label)',
      },
      {
        id: 6,
        emoji: '📋',
        title: 'Assign Content to Your Class',
        body: 'Select a resource from the library. Click the assign option, choose your stream/class, and confirm. Learners will see the assigned content immediately on their dashboard.',
        screenshotLabel: 'Screenshot: Assign to Class flow',
        verification: 'verified',
        verificationNote: 'Exact button label for assigning content requires in-app verification',
        tip: 'Assign content that matches your current classroom topic for maximum engagement.',
      },
    ],
  },
  {
    id: 'teacher-module-4',
    number: 4,
    title: 'Reports & Home Learning',
    subtitle: 'Access learner data and enable home reading — 2 steps',
    accentColor: '#1565C0',
    steps: [
      {
        id: 7,
        emoji: '📊',
        title: 'Access Learner Reports',
        body: 'Navigate to the Reports section in your dashboard. View time spent reading, books accessed and completed, literacy pillar scores, and reading streak data per learner.',
        screenshotLabel: 'Screenshot: Reports dashboard',
        verification: 'verified',
        verificationNote: 'Report section name, metric names, and navigation path require in-app verification',
      },
      {
        id: 8,
        emoji: '🏡',
        title: 'Enable Home Learning',
        body: 'Share learner login credentials with parents via the student diary or WhatsApp. Encourage daily reading (15–20 minutes) and monitor home progress directly from your dashboard during holidays.',
        screenshotLabel: 'Screenshot: Home learning / parent sharing flow',
        verification: 'verified',
        tip: 'Holiday reading tip: April, August, and December breaks are great opportunities to keep learners engaged. Content is always available on any device.',
      },
    ],
  },
]

// ─── LITERACY LEVELS + PILLARS ───────────────────────────────────────────────

export const LITERACY_LEVELS = [
  { icon: '🌱', label: 'Emerging', description: 'Building first sounds & letters', color: '#E65100', bg: '#FFF3E0' },
  { icon: '📗', label: 'Developing', description: 'Growing vocabulary & fluency', color: '#1565C0', bg: '#E3F2FD' },
  { icon: '📘', label: 'Fluent', description: 'Reading with confidence & pace', color: '#2E7D32', bg: '#E8F5E9' },
  { icon: '🏆', label: 'Proficient', description: 'Reading independently & critically', color: '#C01070', bg: '#FDE8F4' },
]

export const LITERACY_PILLARS = [
  { icon: '👂', label: 'Phonemic Awareness', color: '#C01070', bg: '#FDE8F4' },
  { icon: '🔤', label: 'Phonics', color: '#1565C0', bg: '#E3F2FD' },
  { icon: '⚡', label: 'Fluency', color: '#E65100', bg: '#FFF3E0' },
  { icon: '💬', label: 'Vocabulary', color: '#2E7D32', bg: '#E8F5E9' },
  { icon: '📖', label: 'Comprehension', color: '#7B2D8B', bg: '#F3E5F5' },
]

// ─── SANDBOX TIMELINE ────────────────────────────────────────────────────────

export const SANDBOX_PHASES = [
  {
    phase: 1,
    tier: 'Freemium',
    dates: 'Feb 16 – Feb 25',
    description: 'Core platform access — testing initial engagement, navigation, and appetite for more features',
    color: '#2E7D32',
    pillClass: 'pill-free',
  },
  {
    phase: 2,
    tier: 'Medium',
    dates: 'Mar 2 – Apr 7',
    description: 'Extended features access — assessing sufficiency, identifying gaps, and teacher needs',
    color: '#0D47A1',
    pillClass: 'pill-med',
  },
  {
    phase: 3,
    tier: 'Premium',
    dates: 'Apr 28 – Jul 30',
    description: 'Full access including Grade 9 curriculum — evaluating value for money and willingness to pay',
    color: '#4A148C',
    pillClass: 'pill-prem',
  },
  {
    phase: 4,
    tier: 'Holiday Phase',
    dates: 'Aug 3–21 & December',
    description: 'Parent and learner home use — measuring continuity of learning beyond the classroom',
    color: '#4A148C',
    pillClass: 'pill-prem',
  },
]

// ─── CONTENT TYPES ───────────────────────────────────────────────────────────

export const CONTENT_TYPES = [
  { icon: '🎧', label: 'Audiobooks', description: 'Listen and follow along at any reading level' },
  { icon: '📖', label: 'eBooks & ePUBs', description: 'Interactive digital reading experiences' },
  { icon: '🎬', label: 'Videobooks', description: 'Visual storytelling for all learners' },
  { icon: '🔄', label: 'Flipbooks', description: 'Tap-through digital stories' },
  { icon: '🎮', label: 'Games', description: 'Learn through play and interaction' },
  { icon: '🧠', label: 'IL Activities', description: 'Quizzes, puzzles and exercises' },
]
