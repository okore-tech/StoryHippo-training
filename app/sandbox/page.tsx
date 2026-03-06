import TipBox from '@/components/training/TipBox'
import PrintButton from '@/components/onepager/PrintButton'
import HippoMascot from '@/components/training/HippoMascot'
import TribalDecor from '@/components/nav/TribalDecor'
import { SANDBOX_PHASES, CONVERSION_SIGNALS } from '@/lib/content'

export const metadata = { title: 'Sandbox Pilot 2026 — StoryHippo Hub' }

const WHAT_SCHOOLS_GET = [
  { icon: '🆓', title: 'Free Access', desc: 'All three tiers — Freemium, Medium and Premium — for a full year', color: '#4A148C', bg: '#F3E5F5' },
  { icon: '🎓', title: 'Training', desc: 'Teacher onboarding, training materials and platform guides', color: '#4A148C', bg: '#F3E5F5' },
  { icon: '🏅', title: 'Recognition', desc: 'Certificates for standout teachers and schools', color: '#4A148C', bg: '#F3E5F5' },
  { icon: '⭐', title: 'Priority 2027', desc: 'First in line for national rollout at preferential rates', color: '#4A148C', bg: '#F3E5F5' },
]

const SELECTION_CRITERIA = [
  {
    icon: '💻',
    title: 'Digital Infrastructure',
    desc: 'School has a computer lab, class tablets, or learners with access to smartphones.',
  },
  {
    icon: '🤝',
    title: 'Willingness to Participate',
    desc: 'School head and teachers commit to structured feedback via Google Forms throughout the pilot.',
  },
  {
    icon: '📍',
    title: 'Accessible Location',
    desc: 'Priority given to schools within easy reach for cost-effective EdTech team support visits.',
  },
]

const TIER_COLORS: Record<string, string> = {
  Freemium: '#1b5e20',
  Medium: '#0d47a1',
  Premium: '#4a148c',
  'Holiday Phase': '#4a148c',
}

const TIER_BG: Record<string, string> = {
  Freemium: '#a5d6a7',
  Medium: '#90caf9',
  Premium: '#e1bee7',
  'Holiday Phase': '#e1bee7',
}

export default function SandboxPage() {
  return (
    <div style={{ background: '#f4f5f9', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #4A148C 0%, #9C27B0 100%)',
          padding: '40px 32px 44px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.18} size={160} />
        <TribalDecor style={{ position: 'absolute', bottom: 0, left: 0 }} corner="bottom-left" opacity={0.1} size={120} />
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '28px', position: 'relative', zIndex: 1 }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,.15)',
                borderRadius: '20px',
                padding: '4px 14px',
                fontSize: '0.7rem',
                fontWeight: 900,
                color: 'white',
                marginBottom: '12px',
                letterSpacing: '1px',
              }}
            >
              Sandbox Pilot Programme 2026
            </div>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '10px' }}>
              <span style={{ color: '#E1BEE7' }}>Sandbox</span> Pilot Programme
            </h1>
            <p style={{ color: 'rgba(255,255,255,.85)', fontWeight: 600, fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '520px' }}>
              100 selected schools across Nairobi receive free access to StoryHippo for one year.
              Their honest feedback shapes the platform before national rollout in 2027.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
              {['100 Schools', '1-Year Programme', '3 Access Tiers', 'Nairobi First'].map((c) => (
                <span
                  key={c}
                  style={{
                    background: 'rgba(255,255,255,.12)',
                    border: '1.5px solid rgba(255,255,255,.18)',
                    color: 'rgba(255,255,255,.9)',
                    borderRadius: '20px',
                    padding: '5px 12px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="no-print" style={{ flexShrink: 0 }}>
            <HippoMascot mood="think" size={140} opacity={0.9} />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '28px 24px 80px' }}>
        {/* What is the sandbox */}
        <div
          style={{
            background: 'white',
            borderRadius: '14px',
            padding: '22px 24px',
            border: '1.5px solid #e5e7eb',
            marginBottom: '24px',
            boxShadow: '0 1px 4px rgba(0,0,0,.05)',
          }}
        >
          <h2 style={{ fontWeight: 900, fontSize: '1.05rem', color: '#4A148C', marginBottom: '10px' }}>
            🧪 What is the Sandbox?
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#444', lineHeight: 1.65, fontWeight: 600 }}>
            A controlled pilot programme where <strong>100 selected schools</strong> across Nairobi
            receive <strong>free access</strong> to StoryHippo — sponsored by Storymoja through a
            dedicated Sandbox Partner Account. In exchange, schools provide honest, structured feedback
            that shapes the platform before national rollout in 2027.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px,1fr))', gap: '10px', marginTop: '14px' }}>
            {[
              { icon: '🎯', label: 'Goal', val: 'Validate functionality, engagement & learning outcomes' },
              { icon: '📍', label: 'Where', val: 'Nairobi first, then selected counties' },
              { icon: '👥', label: 'Who', val: 'Teachers, learners, parents & sales team' },
              { icon: '📅', label: 'Duration', val: '1-year sponsorship — Feb through Dec 2026' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#F3E5F5', borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{item.icon}</div>
                <h4 style={{ fontWeight: 800, fontSize: '0.8rem', color: '#4A148C', marginBottom: '3px' }}>
                  {item.label}
                </h4>
                <p style={{ fontSize: '0.74rem', color: '#555', fontWeight: 600, lineHeight: 1.4 }}>
                  {item.val}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <h2 style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1A1A2E', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📅</span> Phased Rollout Timeline
        </h2>
        <div style={{ marginBottom: '28px' }}>
          {SANDBOX_PHASES.map((phase) => (
            <div
              key={phase.phase}
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: phase.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 900,
                  fontSize: '0.85rem',
                  flexShrink: 0,
                }}
              >
                {phase.phase}
              </div>
              <div
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  flex: 1,
                  border: '1.5px solid #e5e7eb',
                  boxShadow: '0 1px 4px rgba(0,0,0,.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      background: TIER_COLORS[phase.tier],
                      color: TIER_BG[phase.tier],
                      borderRadius: '12px',
                      padding: '2px 10px',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                    }}
                  >
                    {phase.tier}
                  </span>
                  <span style={{ fontWeight: 800, fontSize: '0.88rem', color: '#1A1A2E' }}>
                    {phase.dates}
                  </span>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#555', fontWeight: 600, lineHeight: 1.5 }}>
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What schools receive */}
        <h2 style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1A1A2E', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🎁</span> What Schools Receive
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(175px,1fr))', gap: '10px', marginBottom: '28px' }}>
          {WHAT_SCHOOLS_GET.map((item) => (
            <div
              key={item.title}
              style={{ background: item.bg, borderRadius: '12px', padding: '16px 14px', border: `1.5px solid ${item.color}33` }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{item.icon}</div>
              <h4 style={{ fontWeight: 800, fontSize: '0.84rem', color: item.color, marginBottom: '4px' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.76rem', color: '#555', fontWeight: 600, lineHeight: 1.4 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Selection criteria */}
        <h2 style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1A1A2E', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>✅</span> School Selection Criteria
        </h2>
        {SELECTION_CRITERIA.map((item) => (
          <div
            key={item.title}
            style={{
              display: 'flex',
              gap: '14px',
              background: 'white',
              borderRadius: '12px',
              padding: '14px 16px',
              marginBottom: '10px',
              border: '1.5px solid #e5e7eb',
              boxShadow: '0 1px 4px rgba(0,0,0,.04)',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#9C27B0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <div>
              <h4 style={{ fontWeight: 900, fontSize: '0.9rem', color: '#1A1A2E', marginBottom: '3px' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#555', fontWeight: 600, lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
        <TipBox variant="info">
          To nominate a school or find out more, speak to your StoryHippo sales representative or
          contact the Storymoja EdTech team directly.
        </TipBox>

        {/* Conversion signals */}
        <h2 style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1A1A2E', margin: '32px 0 8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🎯</span> Sales Intelligence — Conversion Signals
        </h2>
        <p style={{ fontSize: '0.86rem', color: '#6b7280', fontWeight: 600, marginBottom: '16px', lineHeight: 1.6 }}>
          These signals from sandbox schools indicate readiness to convert to a paid subscription.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px,1fr))', gap: '12px' }}>
          {CONVERSION_SIGNALS.map((signal) => (
            <div
              key={signal.title}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '14px',
                border: `1.5px solid ${signal.borderColor}`,
                boxShadow: '0 1px 4px rgba(0,0,0,.04)',
              }}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: '7px' }}>{signal.icon}</div>
              <h4 style={{ fontWeight: 900, fontSize: '0.85rem', color: signal.titleColor, marginBottom: '4px' }}>
                {signal.title}
              </h4>
              <p style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 600, lineHeight: 1.4 }}>
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <PrintButton label="Print Sandbox Overview" />
    </div>
  )
}
