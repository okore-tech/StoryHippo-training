import ModuleSection from '@/components/training/ModuleSection'
import TipBox from '@/components/training/TipBox'
import LiteracyJourney from '@/components/training/ProgressBar'
import PrintButton from '@/components/onepager/PrintButton'
import HippoMascot from '@/components/training/HippoMascot'
import TribalDecor from '@/components/nav/TribalDecor'
import { TEACHER_MODULES } from '@/lib/content'

export const metadata = { title: 'Teacher Training — StoryHippo Hub' }

export default function TeachersPage() {
  return (
    <div style={{ background: '#f4f5f9', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0D47A1 0%, #1565C0 60%, #1E88E5 100%)',
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
                background: 'linear-gradient(90deg,#1565C0,#42A5F5)',
                borderRadius: '20px',
                padding: '4px 14px',
                fontSize: '0.7rem',
                fontWeight: 900,
                color: 'white',
                marginBottom: '12px',
                letterSpacing: '1px',
              }}
            >
              Teacher Training
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
              <span style={{ color: '#90CAF9' }}>Educator</span> Onboarding
            </h1>
            <p style={{ color: 'rgba(255,255,255,.75)', fontWeight: 600, fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '520px' }}>
              Register as Institution, set up your classroom, explore the resource library, and track
              every learner&apos;s literacy progress — from first login to holiday reading.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
              {['4 Modules', '8 Steps', 'Classroom Ready'].map((c) => (
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
            <HippoMascot mood="read" size={140} opacity={0.9} />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '28px 24px 80px' }}>
        {/* Accuracy notice */}
        <TipBox variant="info">
          <strong>Getting Started:</strong> Teachers register under the <strong>"Institution"</strong> account
          type at web.storyhippoafrica.com/signup. Use your school email address for easy account management.
        </TipBox>

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
          <span>🍎</span> Teacher Training Modules
        </h2>

        {TEACHER_MODULES.map((mod, i) => (
          <ModuleSection
            key={mod.id}
            module={mod}
            defaultOpen={i === 0}
          />
        ))}

        {/* Literacy journey */}
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
          <span>📈</span> The Learner&apos;s Literacy Journey
        </h2>
        <p style={{ fontSize: '0.86rem', color: '#6b7280', fontWeight: 600, marginBottom: '16px', lineHeight: 1.6 }}>
          StoryHippo assesses every learner across the Five Pillars of Literacy and places them at the
          right level — so every child reads books that build real confidence.
        </p>
        <LiteracyJourney />
      </div>

      <PrintButton label="Print Teacher Reference" />
    </div>
  )
}
