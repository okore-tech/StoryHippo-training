import type { HippoMood } from './types'

export interface Branch {
  id: string
  trigger: string        // "What if I forgot my password?"
  emoji: string
  steps: string[]        // mini-instructions for this scenario
}

export interface GuideStep {
  id: string
  number: number
  emoji: string
  title: string
  body: string
  screenshotId?: number  // loads /public/screenshots/{id}.png
  tip?: string
  important?: string
  branches?: Branch[]
  testItems?: string[]   // "Try it" interactive checklist
}

export interface RoleGuide {
  id: string
  title: string
  subtitle: string
  emoji: string
  color: string
  bg: string
  mood: HippoMood
  disclaimer?: string
  steps: GuideStep[]
}

// ─── TEACHER / EDUCATOR ──────────────────────────────────────────────────────

const teacherGuide: RoleGuide = {
  id: 'teacher',
  title: 'Teacher / Educator',
  subtitle: 'Set up your school account, create classes and start teaching',
  emoji: '🍎',
  color: '#1565C0',
  bg: 'linear-gradient(135deg, #0D47A1 0%, #1565C0 60%, #1E88E5 100%)',
  mood: 'read',
  disclaimer: 'Teachers access teacher guides, lesson resources and learner reports — not the book library. Only learners have direct access to reading content and assessments.',
  steps: [
    {
      id: 'teacher-1',
      number: 1,
      emoji: '🌐',
      title: 'Open StoryHippo on your browser',
      body: 'Open Chrome (recommended) and navigate to web.storyhippoafrica.com. You should see the StoryHippo homepage with the pink hippo logo. Make sure you have a stable internet connection.',
      screenshotId: 101,
      tip: 'Bookmark the URL — you will use it every school day.',
      branches: [
        {
          id: 'b-site-not-loading',
          trigger: 'The site is not loading',
          emoji: '📶',
          steps: [
            'Check your internet connection — try loading another website.',
            'Try switching from WiFi to mobile data or vice versa.',
            'Clear your browser cache: press Ctrl+Shift+Delete → Clear browsing data.',
            'Try a different browser (Firefox or Edge).',
            'If the problem persists for more than 30 minutes, WhatsApp the Storymoja support team.',
          ],
        },
      ],
      testItems: [
        'I can see the StoryHippo homepage with the pink hippo logo',
        'The URL bar shows web.storyhippoafrica.com',
      ],
    },
    {
      id: 'teacher-2',
      number: 2,
      emoji: '📋',
      title: 'Create your Institution account',
      body: 'Click "Sign Up" in the navigation. On the account type screen, select "Institution" — this is the correct type for educators and schools. Fill in your name, school name, email address and a strong password, then click Submit.',
      screenshotId: 102,
      important: 'Select "Institution" — not Parent or Partner. Choosing the wrong type gives you the wrong dashboard.',
      branches: [
        {
          id: 'b-already-have-account',
          trigger: 'I already have an account',
          emoji: '✅',
          steps: [
            'Click "Sign In" instead of Sign Up.',
            'Enter your Email or Username and password.',
            'You can also use "Sign in with Google" if your account is linked.',
            'If you are unsure whether your account exists, try the "Forgot password?" link first.',
          ],
        },
        {
          id: 'b-email-taken',
          trigger: 'It says my email is already registered',
          emoji: '📧',
          steps: [
            'Your email already has a StoryHippo account.',
            'Click "Sign In" and use "Forgot password?" to reset your password.',
            'Check if a colleague registered the school before you — they may have used your email.',
            'Contact Storymoja support if you need the account transferred to you.',
          ],
        },
      ],
      testItems: [
        'I selected "Institution" as my account type',
        'I filled in my school name and email',
        'I clicked Submit and reached the next screen',
      ],
    },
    {
      id: 'teacher-3',
      number: 3,
      emoji: '📧',
      title: 'Verify your email',
      body: 'Check your inbox for a verification email from StoryHippo. Click the confirmation link. The email should arrive within 2 minutes. After verification, return to web.storyhippoafrica.com and sign in.',
      screenshotId: 103,
      branches: [
        {
          id: 'b-no-email',
          trigger: 'I did not receive the verification email',
          emoji: '🔍',
          steps: [
            'Check your Spam / Junk folder — it is often filtered there.',
            'Make sure you entered the correct email during sign-up.',
            'Wait a full 5 minutes — sometimes email is delayed.',
            'Try requesting a new verification email from the login page.',
            'If nothing arrives after 10 minutes, contact Storymoja support with your registered email address.',
          ],
        },
      ],
      testItems: [
        'I received the verification email',
        'I clicked the confirmation link',
        'My account is now verified',
      ],
    },
    {
      id: 'teacher-4',
      number: 4,
      emoji: '🔑',
      title: 'Log in and explore your dashboard',
      body: 'Go to web.storyhippoafrica.com. Enter your Email or Username and password, then click "Sign In". You can also use "Sign in with Google" if your Google account is linked. Spend a few minutes exploring the dashboard panels before setting up your class.',
      screenshotId: 104,
      tip: 'Your dashboard shows your streams, assigned content, learner activity, and reports all in one place.',
      branches: [
        {
          id: 'b-forgot-password',
          trigger: 'I forgot my password',
          emoji: '🔐',
          steps: [
            'Click "Forgot password?" below the Sign In button.',
            'Enter the email address you registered with.',
            'Check your inbox (and spam) for the password reset link.',
            'Click the link and set a new password — use at least 8 characters.',
            'Return to the login page and sign in with your new password.',
            'Tip: Save your password in your browser or use a password manager.',
          ],
        },
        {
          id: 'b-wrong-dashboard',
          trigger: 'My dashboard looks wrong / I see the wrong role',
          emoji: '🗂️',
          steps: [
            'You may have registered with the wrong account type.',
            'Sign out and contact the Storymoja admin team to change your account type to "Institution".',
            'Do not create a second account — the admin can fix the existing one.',
          ],
        },
      ],
      testItems: [
        'I can log in successfully',
        'I can see my educator dashboard',
        'I can find the "Streams / Classes" section',
      ],
    },
    {
      id: 'teacher-5',
      number: 5,
      emoji: '🏫',
      title: 'Create your first stream (class)',
      body: 'From your dashboard, find the class/stream creation option. Enter the class name — for example "Grade 4 Blue" or "Class 7 Morning" — and select the grade level. Save to create the stream. You can create multiple streams for different classes.',
      screenshotId: 105,
      branches: [
        {
          id: 'b-cant-find-streams',
          trigger: 'I cannot find where to create a stream',
          emoji: '🗺️',
          steps: [
            'Look for a "Classes", "Streams" or "My Classes" menu item in the left sidebar or top navigation.',
            'There may be a prominent "+ Create Class" or "+ New Stream" button on your dashboard home.',
            'If you are still stuck, take a screenshot and send it to the Storymoja support team via WhatsApp.',
          ],
        },
      ],
      testItems: [
        'I created at least one stream / class',
        'The stream has a name and grade level',
        'I can see the stream on my dashboard',
      ],
    },
    {
      id: 'teacher-6',
      number: 6,
      emoji: '👧',
      title: 'Add learners to your stream',
      body: 'Open the stream you just created. Find the "Add Learner" or "Add Student" option. Enter each learner\'s name and details. StoryHippo automatically generates a username and password for every learner — you do not create these yourself.',
      screenshotId: 106,
      important: 'Screenshot or write down the auto-generated credentials immediately — they are shown only once. Share them via the student diary or class WhatsApp group.',
      branches: [
        {
          id: 'b-learner-lost-creds',
          trigger: 'A learner lost their login credentials',
          emoji: '🔑',
          steps: [
            'Log in to your educator dashboard.',
            'Go to the stream and find the learner.',
            'Look for a "Reset credentials" or "View credentials" option next to the learner\'s name.',
            'Share the new credentials with the learner via their diary or parent\'s WhatsApp.',
          ],
        },
        {
          id: 'b-how-many-learners',
          trigger: 'How many learners can I add?',
          emoji: '📊',
          steps: [
            'The number of learner seats depends on your school\'s subscription tier.',
            'During the Sandbox pilot, schools have access to the full number of seats for their tier.',
            'Contact the Storymoja team if you need to increase your learner count.',
          ],
        },
      ],
      testItems: [
        'I added at least one learner to my stream',
        'I have the auto-generated username and password for each learner',
        'I have shared or plan to share the credentials with learners',
      ],
    },
    {
      id: 'teacher-7',
      number: 7,
      emoji: '📚',
      title: 'Browse and assign content to your stream',
      body: 'Navigate to the Resource Library from your dashboard. Browse audiobooks, eBooks, flipbooks, videobooks, games and IL activities. Select a resource and use the assign option to send it to your stream. Learners will see assigned content immediately on their dashboard.',
      screenshotId: 107,
      tip: 'Assign content that matches your current classroom topic or literacy focus for the week.',
      branches: [
        {
          id: 'b-content-not-visible',
          trigger: 'Learners cannot see the content I assigned',
          emoji: '👁️',
          steps: [
            'Confirm you assigned the content to the correct stream.',
            'Ask the learner to refresh or log out and log back in.',
            'Check that the learner is correctly added to the stream.',
            'If the issue persists, contact Storymoja support with the stream name and learner username.',
          ],
        },
      ],
      testItems: [
        'I found at least one piece of content in the Resource Library',
        'I assigned it to my stream',
        'Learners in the stream can see it on their dashboard',
      ],
    },
    {
      id: 'teacher-8',
      number: 8,
      emoji: '📊',
      title: 'Monitor learner progress in Reports',
      body: 'Navigate to the Reports section on your dashboard. View each learner\'s reading time, books accessed and completed, literacy pillar scores, and reading streaks. Use this data to identify learners who need extra support.',
      screenshotId: 108,
      tip: 'Check reports weekly — learners with a 3+ day reading streak are building the habit. Celebrate these in class!',
      branches: [
        {
          id: 'b-no-data',
          trigger: 'Reports show no data / are empty',
          emoji: '📭',
          steps: [
            'Reports populate once learners have logged in and engaged with content.',
            'Encourage learners to log in and read at least one book.',
            'Give it 24 hours after first logins before expecting full data.',
            'If still empty after learner activity, contact Storymoja support.',
          ],
        },
      ],
      testItems: [
        'I can navigate to the Reports section',
        'I can see data for at least one learner',
        'I know how to identify learners who have not logged in yet',
      ],
    },
  ],
}

// ─── SCHOOL ADMIN ────────────────────────────────────────────────────────────

const adminGuide: RoleGuide = {
  id: 'admin',
  title: 'School Admin / Principal',
  subtitle: 'Set up your school account and manage teachers',
  emoji: '🏫',
  color: '#7B2D8B',
  bg: 'linear-gradient(135deg, #4A148C 0%, #7B2D8B 60%, #9C27B0 100%)',
  mood: 'think',
  disclaimer: 'School admins manage the school account, teachers and reports. Admins do not have direct learner library access.',
  steps: [
    {
      id: 'admin-1',
      number: 1,
      emoji: '🌐',
      title: 'Create the school\'s Institution account',
      body: 'Go to web.storyhippoafrica.com and click "Sign Up". Select "Institution" as your account type. Use the school\'s official email address and fill in your school name, county and other details. This account represents your entire school.',
      important: 'Use the school\'s official email — not a personal one. This ensures continuity if staff changes.',
      branches: [
        {
          id: 'b-admin-existing',
          trigger: 'A teacher already created an account for our school',
          emoji: '🔗',
          steps: [
            'That is fine — the existing account can be used.',
            'Ask the teacher who created it to share login access with you.',
            'The admin can request Storymoja support to transfer account ownership to the official school email.',
          ],
        },
      ],
      testItems: [
        'The school account is created with the official school email',
        'I have verified the email address',
        'I can log in to the school dashboard',
      ],
    },
    {
      id: 'admin-2',
      number: 2,
      emoji: '👨‍🏫',
      title: 'Set up teacher accounts',
      body: 'Each teacher needs their own Institution account registered with their personal work email. Teachers sign up themselves at web.storyhippoafrica.com — they do not share the school\'s account. Brief your teachers to register and then inform you once done so you can coordinate class setup.',
      tip: 'Schedule a 30-minute staff setup session where all teachers register together — it makes it much faster.',
      branches: [
        {
          id: 'b-teacher-cant-register',
          trigger: 'A teacher cannot complete registration',
          emoji: '🆘',
          steps: [
            'Check their email is not already registered (try Forgot Password first).',
            'Make sure they select "Institution" and not another account type.',
            'Check they have stable internet during sign-up.',
            'Escalate to Storymoja support with the teacher\'s name and email.',
          ],
        },
      ],
      testItems: [
        'All teachers have been briefed on how to create their accounts',
        'At least one teacher has successfully registered and logged in',
        'Teachers know to select "Institution" as account type',
      ],
    },
    {
      id: 'admin-3',
      number: 3,
      emoji: '📋',
      title: 'Coordinate stream and learner setup',
      body: 'Each teacher creates their own streams (classes) and adds learners directly from their dashboard. As admin, your role is to ensure every teacher has completed setup and every learner has credentials. Request a weekly report from teachers showing class setup progress.',
      branches: [
        {
          id: 'b-teacher-not-set-up',
          trigger: 'A teacher has not set up their class yet',
          emoji: '⏰',
          steps: [
            'Share the Teacher guide with them — they can follow the Teacher steps above.',
            'Offer to sit with them for a 20-minute setup session.',
            'Escalate to the Storymoja EdTech team for additional teacher support.',
          ],
        },
      ],
      testItems: [
        'All teachers have created their streams',
        'All learners have been added and have credentials',
        'I have confirmed with Storymoja that the school is fully onboarded',
      ],
    },
    {
      id: 'admin-4',
      number: 4,
      emoji: '📊',
      title: 'Review school-wide reports',
      body: 'Use the Reports section to monitor engagement across the entire school — which classes are most active, which learners are reading regularly, and which grades need attention. Share monthly summaries with your head of department.',
      testItems: [
        'I can access school-wide reports',
        'I have reviewed reading engagement data',
        'I have shared initial data with teaching staff',
      ],
    },
  ],
}

// ─── PARENT ──────────────────────────────────────────────────────────────────

const parentGuide: RoleGuide = {
  id: 'parent',
  title: 'Parent / Guardian',
  subtitle: 'Support your child\'s reading journey at home',
  emoji: '👨‍👩‍👧',
  color: '#2E7D32',
  bg: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 60%, #4CAF50 100%)',
  mood: 'wave',
  disclaimer: 'Parents access progress reports and reading guides to support their child. The reading library is accessed through your child\'s learner account — not the parent account.',
  steps: [
    {
      id: 'parent-1',
      number: 1,
      emoji: '🔑',
      title: 'Get your child\'s login credentials',
      body: 'Your child\'s teacher automatically generates a username and password for each learner. Look for the credentials in your child\'s school diary, or in your class WhatsApp group. These are your child\'s login details — not yours.',
      important: 'Do not share your child\'s login with other children. Each child needs their own account for accurate progress tracking.',
      branches: [
        {
          id: 'b-parent-no-creds',
          trigger: 'I have not received my child\'s credentials',
          emoji: '📬',
          steps: [
            'Message your child\'s teacher via the school WhatsApp group.',
            'Check the school diary — credentials may have been written there.',
            'The teacher can re-generate or view credentials from their dashboard at any time.',
          ],
        },
      ],
      testItems: [
        'I have my child\'s StoryHippo username',
        'I have my child\'s StoryHippo password',
      ],
    },
    {
      id: 'parent-2',
      number: 2,
      emoji: '📱',
      title: 'Log in together the first time',
      body: 'Open web.storyhippoafrica.com (or the StoryHippo app) on your phone, tablet or computer. Enter your child\'s username and password. Browse the platform together so your child feels confident. Let them choose their first book!',
      tip: 'StoryHippo works on any device — smartphone, tablet, computer or school laptop. No download needed unless you want the app.',
      branches: [
        {
          id: 'b-login-failed',
          trigger: 'The credentials do not work',
          emoji: '🔐',
          steps: [
            'Double-check the username and password — usernames are usually lowercase.',
            'Passwords are case-sensitive — check for capital letters.',
            'Try typing into a notes app first to confirm there are no typos, then paste into the login form.',
            'If still not working, contact the teacher to regenerate credentials.',
          ],
        },
      ],
      testItems: [
        'My child can log in successfully',
        'We can see the learner dashboard with books and content',
        'My child has chosen and started their first book',
      ],
    },
    {
      id: 'parent-3',
      number: 3,
      emoji: '⏰',
      title: 'Set a daily reading routine',
      body: 'Even 15–20 minutes of daily reading on StoryHippo makes a measurable difference. Choose a consistent time — after school, before bed or during commute. Reading streaks are tracked on the platform — encourage your child to keep the streak going!',
      tip: 'Ask your child "What did you read today?" — even this one question builds comprehension and shows reading matters at home.',
      testItems: [
        'We have agreed on a daily reading time',
        'My child has read for at least 15 minutes today',
        'I have encouraged them to maintain their reading streak',
      ],
    },
    {
      id: 'parent-4',
      number: 4,
      emoji: '👤',
      title: 'Create your own Parent account (optional)',
      body: 'Go to web.storyhippoafrica.com and click "Sign Up". Select "Parent" as your account type. Once set up, you can see your child\'s reading progress, time spent reading, literacy level and streak — all from your own dashboard, separate from your child\'s account.',
      branches: [
        {
          id: 'b-link-child',
          trigger: 'How do I link my parent account to my child?',
          emoji: '🔗',
          steps: [
            'During your parent account setup, you will be asked to enter your child\'s username or account details.',
            'Enter the child\'s username (provided by the teacher) to link the accounts.',
            'If you have multiple children on StoryHippo, you can link all of them.',
            'If you are having trouble linking, contact Storymoja support.',
          ],
        },
      ],
      testItems: [
        'I have created my Parent account (or decided to skip this step)',
        'If created — I can see my child\'s reading progress data',
      ],
    },
  ],
}

// ─── LEARNER ─────────────────────────────────────────────────────────────────

const learnerGuide: RoleGuide = {
  id: 'learner',
  title: 'Learner / Student',
  subtitle: 'Log in, explore the library and start your reading journey',
  emoji: '👧',
  color: '#E91E8C',
  bg: 'linear-gradient(135deg, #CC0066 0%, #E91E8C 60%, #FF4DB2 100%)',
  mood: 'cheer',
  steps: [
    {
      id: 'learner-1',
      number: 1,
      emoji: '🔑',
      title: 'Get your login from your teacher',
      body: 'Your teacher or parent has your StoryHippo username and password. Check your school diary, or ask your teacher to share it via your class WhatsApp group. You need BOTH the username AND the password.',
      branches: [
        {
          id: 'b-learner-no-creds',
          trigger: 'I do not have my login details',
          emoji: '🙋',
          steps: [
            'Ask your teacher — they can see your credentials from their dashboard.',
            'Tell your parent to check the class WhatsApp group or school diary.',
            'Your teacher can regenerate your credentials if they are lost.',
          ],
        },
      ],
      testItems: [
        'I have my username',
        'I have my password',
      ],
    },
    {
      id: 'learner-2',
      number: 2,
      emoji: '🚀',
      title: 'Log in to StoryHippo',
      body: 'Ask your teacher or parent to open web.storyhippoafrica.com on a phone, tablet or computer. Type your username and password in the login box and click Sign In. You can also use the StoryHippo app.',
      screenshotId: 1,
      branches: [
        {
          id: 'b-learner-forgot-password',
          trigger: 'I forgot my password',
          emoji: '🔐',
          steps: [
            'Tell your teacher! They can see your login details from their teacher dashboard.',
            'Your teacher can also reset your password if needed.',
            'Do not try to create a new account — always ask your teacher first.',
          ],
        },
        {
          id: 'b-learner-wrong-password',
          trigger: 'It says wrong password',
          emoji: '❌',
          steps: [
            'Passwords are CAPITAL-letter sensitive — check for upper and lower case.',
            'Try typing the password in a notes app first so you can see it, then copy-paste it in.',
            'Ask your teacher to confirm what your password is.',
          ],
        },
      ],
      testItems: [
        'I typed my username correctly',
        'I typed my password correctly',
        'I am now inside my StoryHippo dashboard',
      ],
    },
    {
      id: 'learner-3',
      number: 3,
      emoji: '📝',
      title: 'Complete your reading assessment',
      body: 'When you first log in, StoryHippo will ask you to do a short reading assessment — a few questions to find out your reading level. Answer honestly — this is NOT a test! It just helps the system give you books at exactly the right level for you.',
      tip: 'Do your best — the better your assessment result, the better the books recommended for you!',
      testItems: [
        'I completed the reading assessment',
        'I can see my reading level on my dashboard',
      ],
    },
    {
      id: 'learner-4',
      number: 4,
      emoji: '📚',
      title: 'Explore your library',
      body: 'You now have access to the full StoryHippo library! Browse audiobooks, eBooks, flipbooks, videobooks, and games. Your teacher may have assigned specific books for you — check the "Assigned" section first. Then explore anything that looks interesting!',
      tip: 'Start with an audiobook if reading feels hard — listening while following the text is a great way to improve.',
      testItems: [
        'I found the book library',
        'I checked my assigned content from my teacher',
        'I started reading or listening to at least one book',
      ],
    },
    {
      id: 'learner-5',
      number: 5,
      emoji: '🏆',
      title: 'Build your reading streak',
      body: 'Try to read something on StoryHippo every single day — even for 10 minutes. The platform tracks your reading streak. The longer your streak, the more you learn. Reading every day is the single best thing you can do to become a better reader.',
      tip: 'Challenge a friend to a reading streak competition — who can keep their streak going the longest?',
      testItems: [
        'I read something today',
        'I know where to find my reading streak on my dashboard',
        'I have set a goal for how many days I will read this week',
      ],
    },
  ],
}

// ─── PARTNER / NGO ───────────────────────────────────────────────────────────

const partnerGuide: RoleGuide = {
  id: 'partner',
  title: 'Partner / NGO / Sponsor',
  subtitle: 'Understand how StoryHippo works and how to support schools',
  emoji: '🤝',
  color: '#FF6B35',
  bg: 'linear-gradient(135deg, #E64A00 0%, #FF6B35 60%, #FF9A6C 100%)',
  mood: 'sunglasses',
  steps: [
    {
      id: 'partner-1',
      number: 1,
      emoji: '🌍',
      title: 'Understand the StoryHippo model',
      body: 'StoryHippo is a subscription-based digital literacy platform. Schools subscribe and gain access to a library of 6 content types — audiobooks, eBooks, flipbooks, videobooks, games and interactive learning (IL) activities — across 4 reading levels aligned to 5 literacy pillars.',
      testItems: [
        'I understand that StoryHippo is a school-facing literacy platform',
        'I understand the 3 subscription tiers: Freemium, Medium, Premium',
      ],
    },
    {
      id: 'partner-2',
      number: 2,
      emoji: '🧪',
      title: 'The Sandbox Pilot model',
      body: 'Partners and NGOs can sponsor schools in the Sandbox Pilot — 100 schools receive free 1-year access in exchange for structured feedback. This pilot validates the platform before a paid national rollout. Partners get impact reports and school performance data.',
      tip: 'Interested in sponsoring schools? Contact the Storymoja EdTech team to discuss a partnership agreement.',
      testItems: [
        'I understand the Sandbox Pilot model',
        'I know how to nominate or sponsor schools',
      ],
    },
    {
      id: 'partner-3',
      number: 3,
      emoji: '📊',
      title: 'Access your partner reports',
      body: 'As a registered partner, you receive regular impact reports showing: number of active learners, average reading time, literacy improvement scores, and school engagement rates. Contact your Storymoja account manager to get your partner dashboard access.',
      testItems: [
        'I have contact details for my Storymoja account manager',
        'I know what data is available in partner reports',
      ],
    },
  ],
}

export const ROLE_GUIDES: RoleGuide[] = [
  teacherGuide,
  adminGuide,
  parentGuide,
  learnerGuide,
  partnerGuide,
]
