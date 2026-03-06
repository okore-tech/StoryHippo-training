import ModuleSection from '@/components/training/ModuleSection'
import PrintButton from '@/components/onepager/PrintButton'
import HippoMascot from '@/components/training/HippoMascot'
import TribalDecor from '@/components/nav/TribalDecor'
import { SALES_MODULES, CONVERSION_SIGNALS } from '@/lib/content'

export const metadata = { title: 'Sales Team Training — StoryHippo Hub' }

export default function SalesPage() {
  return (
    <div style={{ background: '#f4f5f9', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #CC0066 0%, #E91E8C 60%, #FF4DB2 100%)',
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
                background: 'linear-gradient(90deg,#E91E8C,#7B2D8B)',
                borderRadius: '20px',
                padding: '4px 14px',
                fontSize: '0.7rem',
                fontWeight: 900,
                color: 'white',
                marginBottom: '12px',
                letterSpacing: '1px',
              }}
            >
              Sales Team Training
            </div>
            <h1
              style={{
                color: 'white',
                fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: '10px',
              }}
            >
              <span style={{ color: '#F8A4D4' }}>Sales Team</span> Onboarding
            </h1>
            <p style={{ color: 'rgba(255,255,255,.75)', fontWeight: 600, fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '520px' }}>
              Navigate your dashboard, apply your sales code, and onboard schools to the Sandbox pilot.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
              {['3 Modules', '10 Steps', 'Platform Access'].map((c) => (
                <span
                  key={c}
                  style={{
                    background: 'rgba(255,255,255,.1)',
                    border: '1.5px solid rgba(255,255,255,.15)',
                    color: 'rgba(255,255,255,.85)',
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
            <HippoMascot mood="sunglasses" size={140} opacity={0.9} />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '28px 24px 80px' }}>
        {/* Modules */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.1rem',
            color: '#1A1A2E',
            margin: '24px 0 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>💼</span> Sales Training Modules
        </h2>

        {SALES_MODULES.map((mod, i) => (
          <ModuleSection
            key={mod.id}
            module={mod}
            defaultOpen={i === 0}
          />
        ))}

        {/* Conversion signals */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.1rem',
            color: '#1A1A2E',
            margin: '32px 0 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>🎯</span> Conversion Signals to Watch For
        </h2>
        <p style={{ fontSize: '0.86rem', color: '#6b7280', fontWeight: 600, marginBottom: '16px', lineHeight: 1.6 }}>
          These behaviours indicate a school is ready to move from Sandbox to a paid subscription.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))',
            gap: '12px',
          }}
        >
          {CONVERSION_SIGNALS.map((signal) => (
            <div
              key={signal.title}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '16px',
                border: `1.5px solid ${signal.borderColor}`,
                boxShadow: '0 1px 4px rgba(0,0,0,.04)',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{signal.icon}</div>
              <h4 style={{ fontWeight: 900, fontSize: '0.86rem', color: signal.titleColor, marginBottom: '5px' }}>
                {signal.title}
              </h4>
              <p style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 600, lineHeight: 1.4 }}>
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <PrintButton label="Print Sales Reference" />
    </div>
  )
}
