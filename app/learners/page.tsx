import PrintButton from '@/components/onepager/PrintButton'
import HippoMascot from '@/components/training/HippoMascot'
import TribalDecor from '@/components/nav/TribalDecor'
import { LITERACY_LEVELS } from '@/lib/content'

export const metadata = { title: 'Learner Guide — StoryHippo Hub' }

const ACTIVITIES = [
  { icon: '🎧', label: 'Listen', description: 'Tap an audiobook and follow along with the words', color: '#C01070', bg: '#FDE8F4' },
  { icon: '📖', label: 'Read', description: 'Open an eBook or flipbook and tap through the pages', color: '#1565C0', bg: '#E3F2FD' },
  { icon: '🎬', label: 'Watch', description: 'Press play on a videobook and watch the story come alive', color: '#E65100', bg: '#FFF3E0' },
  { icon: '🎮', label: 'Play', description: 'Try the games and interactive activities — super fun!', color: '#2E7D32', bg: '#E8F5E9' },
]

const LEARNER_STEPS = [
  {
    num: 1,
    emoji: '📱',
    title: 'Open StoryHippo',
    body: 'Ask your teacher or parent to open the StoryHippo app or website on your tablet, phone, or computer.',
    color: '#E91E8C',
  },
  {
    num: 2,
    emoji: '🔑',
    title: 'Enter Your Login Details',
    body: 'Your teacher gave you a username and password. Type them in carefully and press Log In!',
    color: '#E91E8C',
    tip: "Can't remember your password? Ask your teacher — they can look it up for you!",
  },
  {
    num: 3,
    emoji: '🧠',
    title: 'Complete Your Reading Assessment',
    body: 'Answer fun questions about sounds, words and stories. There are no wrong answers — it helps us find the perfect books just for YOU!',
    color: '#FF6B35',
  },
  {
    num: 4,
    emoji: '🌱',
    title: 'Get Your Reading Level',
    body: 'StoryHippo will give you your reading level: Emerging, Developing, Fluent, or Proficient. Your books will match your level perfectly.',
    color: '#FF6B35',
  },
  {
    num: 5,
    emoji: '✅',
    title: 'Complete Your Activities',
    body: 'Finish all the books and activities at your level to unlock the next reading challenge.',
    color: '#E91E8C',
  },
  {
    num: 6,
    emoji: '🔥',
    title: 'Build a Reading Streak',
    body: "Read a little every day — at school AND at home! Your teacher and parent can see your progress. Keep the streak going!",
    color: '#E91E8C',
    tip: 'The more you read, the better you get! You\'re a StoryHippo star! 🦛⭐',
  },
]

export default function LearnersPage() {
  return (
    <div style={{ background: '#f4f5f9', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #E91E8C 0%, #FF6B35 100%)',
          padding: '40px 32px 44px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.2} size={160} />
        <TribalDecor style={{ position: 'absolute', bottom: 0, left: 0 }} corner="bottom-left" opacity={0.12} size={120} />
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '28px', position: 'relative', zIndex: 1 }}>
          <div style={{ flex: 1 }}>
            <h1
              style={{
                color: 'white',
                fontSize: 'clamp(1.8rem,3.5vw,2.6rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: '10px',
              }}
            >
              Hey Reader! 👋
              <br />Let&apos;s Get Started 🦛📚
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontWeight: 700, fontSize: '1rem', lineHeight: 1.6 }}>
              Your guide to logging in, reading books, and levelling up on StoryHippo!
            </p>
          </div>
          <div className="no-print" style={{ flexShrink: 0 }}>
            <HippoMascot mood="cheer" size={150} opacity={0.92} />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '28px 24px 80px' }}>
        {/* Steps 1–4: Login + Assessment */}
        <h2 style={{ fontWeight: 900, fontSize: '1.2rem', color: '#1A1A2E', marginBottom: '16px' }}>
          Step 1 &amp; 2 — Log In 🔑
        </h2>
        {LEARNER_STEPS.slice(0, 2).map((step) => (
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
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: step.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0,
              }}
            >
              {step.emoji}
            </div>
            <div>
              <h3 style={{ fontWeight: 900, fontSize: '0.96rem', color: '#1A1A2E', marginBottom: '4px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#555', fontWeight: 600, lineHeight: 1.5 }}>
                {step.body}
              </p>
              {step.tip && (
                <div
                  style={{
                    background: '#fff8e1',
                    borderLeft: '4px solid #FFD54F',
                    borderRadius: '0 8px 8px 0',
                    padding: '8px 12px',
                    marginTop: '10px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#5a4000',
                  }}
                >
                  💡 {step.tip}
                </div>
              )}
            </div>
          </div>
        ))}

        <h2 style={{ fontWeight: 900, fontSize: '1.2rem', color: '#1A1A2E', margin: '24px 0 16px' }}>
          Step 3 &amp; 4 — Your Reading Assessment 📝
        </h2>
        {LEARNER_STEPS.slice(2, 4).map((step) => (
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
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: step.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0,
              }}
            >
              {step.emoji}
            </div>
            <div>
              <h3 style={{ fontWeight: 900, fontSize: '0.96rem', color: '#1A1A2E', marginBottom: '4px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#555', fontWeight: 600, lineHeight: 1.5 }}>
                {step.body}
              </p>
            </div>
          </div>
        ))}

        {/* Reading level cards */}
        <div style={{ display: 'flex', gap: '0', borderRadius: '14px', overflow: 'hidden', marginBottom: '24px', boxShadow: '0 2px 8px rgba(0,0,0,.08)' }}>
          {LITERACY_LEVELS.map((level) => (
            <div
              key={level.label}
              style={{ flex: 1, padding: '16px 10px', textAlign: 'center', background: level.bg }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{level.icon}</div>
              <h4 style={{ fontWeight: 900, fontSize: '0.82rem', color: level.color, marginBottom: '3px' }}>
                {level.label}
              </h4>
              <p style={{ fontSize: '0.72rem', color: '#555', fontWeight: 600, lineHeight: 1.3 }}>
                {level.description}
              </p>
            </div>
          ))}
        </div>

        {/* Activities */}
        <h2 style={{ fontWeight: 900, fontSize: '1.2rem', color: '#1A1A2E', margin: '24px 0 16px' }}>
          Step 5 — Start Reading! 📚
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(175px,1fr))',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          {ACTIVITIES.map((a) => (
            <div
              key={a.label}
              style={{
                background: a.bg,
                borderRadius: '14px',
                padding: '20px 14px',
                textAlign: 'center',
                border: `1.5px solid ${a.color}33`,
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{a.icon}</div>
              <h3 style={{ fontWeight: 900, fontSize: '1rem', color: a.color, marginBottom: '5px' }}>
                {a.label}
              </h3>
              <p style={{ fontSize: '0.78rem', color: '#555', fontWeight: 600, lineHeight: 1.4 }}>
                {a.description}
              </p>
            </div>
          ))}
        </div>

        {/* Level up steps */}
        <h2 style={{ fontWeight: 900, fontSize: '1.2rem', color: '#1A1A2E', margin: '24px 0 16px' }}>
          Step 6 — Level Up! 🎉
        </h2>
        {LEARNER_STEPS.slice(4).map((step) => (
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
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: step.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0,
              }}
            >
              {step.emoji}
            </div>
            <div>
              <h3 style={{ fontWeight: 900, fontSize: '0.96rem', color: '#1A1A2E', marginBottom: '4px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#555', fontWeight: 600, lineHeight: 1.5 }}>
                {step.body}
              </p>
              {step.tip && (
                <div
                  style={{
                    background: '#fff8e1',
                    borderLeft: '4px solid #FFD54F',
                    borderRadius: '0 8px 8px 0',
                    padding: '8px 12px',
                    marginTop: '10px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#5a4000',
                  }}
                >
                  🌟 {step.tip}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <PrintButton label="Print Learner Card" />
    </div>
  )
}
