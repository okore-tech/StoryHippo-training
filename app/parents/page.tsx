import TipBox from '@/components/training/TipBox'
import PrintButton from '@/components/onepager/PrintButton'
import HippoMascot from '@/components/training/HippoMascot'
import TribalDecor from '@/components/nav/TribalDecor'
import { LITERACY_LEVELS } from '@/lib/content'

export const metadata = { title: "Parent's Guide — StoryHippo Hub" }

const PARENT_STEPS = [
  {
    num: 1,
    emoji: '🔑',
    title: "Get Your Child's Login",
    body: "Your child's teacher will provide a username and password. Check the student diary or your class WhatsApp group.",
  },
  {
    num: 2,
    emoji: '👨‍👩‍👧',
    title: 'Log In Together',
    body: "Open the StoryHippo app or website, enter your child's credentials, and explore the platform together the first time. This helps your child feel confident and builds excitement.",
  },
  {
    num: 3,
    emoji: '👤',
    title: 'Create a Parent Account (Optional)',
    body: 'Sign up as a Parent on the sign-up page to get your own dashboard. This gives you real-time visibility of your child\'s reading progress, levels, and streaks.',
    tip: 'StoryHippo works on any smartphone, tablet, or computer — no special device needed!',
  },
  {
    num: 4,
    emoji: '⏰',
    title: 'Set a Daily Reading Time',
    body: 'Even 15–20 minutes of reading on StoryHippo each day makes a measurable difference in literacy progress. Choose a consistent time — after school, before bed, or during a commute.',
  },
  {
    num: 5,
    emoji: '💬',
    title: 'Ask About Their Books',
    body: '"What did you read today?" or "What happened in the story?" — simple questions build comprehension skills and show your child that reading matters at home too.',
  },
  {
    num: 6,
    emoji: '📊',
    title: 'Track Progress on Your Dashboard',
    body: 'Log into your Parent account to view time spent reading, books completed, current literacy level, and reading streaks.',
    tip: 'Holiday reading: Keep the habit alive during April, August, and December breaks — StoryHippo content is always available!',
  },
]

const WHAT_CHILD_CAN_DO = [
  { icon: '🎧', label: 'Listen to Audiobooks', desc: 'Great for car rides and quiet time at home', bg: '#E8F5E9', color: '#2E7D32' },
  { icon: '📖', label: 'Read eBooks', desc: 'Interactive tap-through books matched to their level', bg: '#E8F5E9', color: '#2E7D32' },
  { icon: '🎮', label: 'Play Learning Games', desc: 'Fun phonics and comprehension games', bg: '#E8F5E9', color: '#2E7D32' },
  { icon: '🎬', label: 'Watch Videobooks', desc: 'Animated stories that bring reading to life', bg: '#E8F5E9', color: '#2E7D32' },
]

export default function ParentsPage() {
  return (
    <div style={{ background: '#f4f5f9', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
          padding: '40px 32px 44px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.18} size={160} />
        <TribalDecor style={{ position: 'absolute', bottom: 0, left: 0 }} corner="bottom-left" opacity={0.1} size={120} />
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '28px', position: 'relative', zIndex: 1 }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '10px' }}>
              Parent&apos;s Guide to <span style={{ color: '#C8E6C9' }}>StoryHippo</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontWeight: 600, fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '500px' }}>
              Support your child&apos;s reading journey from home — track progress, explore content, and stay connected to their literacy growth.
            </p>
          </div>
          <div className="no-print" style={{ flexShrink: 0 }}>
            <HippoMascot mood="wave" size={140} opacity={0.9} />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '28px 24px 80px' }}>
        {/* Getting started */}
        <h2 style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1A1A2E', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🚀</span> Getting Started
        </h2>
        {PARENT_STEPS.slice(0, 3).map((step) => (
          <div
            key={step.num}
            style={{
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
              background: 'white',
              borderRadius: '14px',
              padding: '16px',
              marginBottom: '12px',
              border: '1.5px solid #e5e7eb',
              boxShadow: '0 1px 4px rgba(0,0,0,.04)',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#2E7D32',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                flexShrink: 0,
                marginTop: '2px',
              }}
            >
              {step.emoji}
            </div>
            <div>
              <h3 style={{ fontWeight: 900, fontSize: '0.92rem', color: '#1A1A2E', marginBottom: '4px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#555', fontWeight: 600, lineHeight: 1.5 }}>
                {step.body}
              </p>
              {step.tip && <TipBox variant="tip">{step.tip}</TipBox>}
            </div>
          </div>
        ))}

        {/* What child can do */}
        <h2 style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1A1A2E', margin: '28px 0 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🌟</span> What Your Child Can Do
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px,1fr))', gap: '10px', marginBottom: '28px' }}>
          {WHAT_CHILD_CAN_DO.map((item) => (
            <div
              key={item.label}
              style={{
                background: item.bg,
                borderRadius: '12px',
                padding: '16px 14px',
                border: `1.5px solid ${item.color}33`,
              }}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{item.icon}</div>
              <h4 style={{ fontWeight: 800, fontSize: '0.84rem', color: item.color, marginBottom: '4px' }}>
                {item.label}
              </h4>
              <p style={{ fontSize: '0.76rem', color: '#555', fontWeight: 600, lineHeight: 1.4 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting steps */}
        <h2 style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1A1A2E', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🤝</span> How to Support Your Child
        </h2>
        {PARENT_STEPS.slice(3).map((step) => (
          <div
            key={step.num}
            style={{
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
              background: 'white',
              borderRadius: '14px',
              padding: '16px',
              marginBottom: '12px',
              border: '1.5px solid #e5e7eb',
              boxShadow: '0 1px 4px rgba(0,0,0,.04)',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#2E7D32',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                flexShrink: 0,
                marginTop: '2px',
              }}
            >
              {step.emoji}
            </div>
            <div>
              <h3 style={{ fontWeight: 900, fontSize: '0.92rem', color: '#1A1A2E', marginBottom: '4px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#555', fontWeight: 600, lineHeight: 1.5 }}>
                {step.body}
              </p>
              {step.tip && <TipBox variant="tip">{step.tip}</TipBox>}
            </div>
          </div>
        ))}

        {/* Reading levels */}
        <h2 style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1A1A2E', margin: '28px 0 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📈</span> Understanding Your Child&apos;s Reading Level
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(175px,1fr))', gap: '10px' }}>
          {LITERACY_LEVELS.map((level) => (
            <div
              key={level.label}
              style={{
                background: level.bg,
                borderRadius: '12px',
                padding: '16px',
                border: `1.5px solid ${level.color}33`,
              }}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{level.icon}</div>
              <h4 style={{ fontWeight: 900, fontSize: '0.85rem', color: level.color, marginBottom: '4px' }}>
                {level.label} Reader
              </h4>
              <p style={{ fontSize: '0.76rem', color: '#555', fontWeight: 600, lineHeight: 1.4 }}>
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <PrintButton label="Print Parent Guide" />
    </div>
  )
}
