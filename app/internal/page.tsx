'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import HippoMascot from '@/components/training/HippoMascot'
import TribalDecor from '@/components/nav/TribalDecor'

export default function InternalPage() {
  const router = useRouter()

  return (
    <div style={{ background: '#f4f5f9', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #CC0066 0%, #E91E8C 60%, #FF4DB2 100%)',
          padding: '40px 32px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.18} size={180} />
        <TribalDecor style={{ position: 'absolute', bottom: 0, left: 0 }} corner="bottom-left" opacity={0.1} size={140} />

        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <button
            onClick={() => router.push('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.15)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              color: 'white',
              borderRadius: '20px',
              padding: '5px 14px',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              marginBottom: '22px',
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            &larr; Back
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '220px' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '20px',
                  padding: '3px 14px',
                  fontSize: '0.68rem',
                  fontWeight: 900,
                  color: 'white',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                🏢 Storymoja Internal
              </div>
              <h1
                style={{
                  color: 'white',
                  fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  marginBottom: '10px',
                }}
              >
                Internal Team Hub
              </h1>
              <p
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  lineHeight: 1.65,
                  maxWidth: '480px',
                }}
              >
                Welcome, Storymoja team. Access your training modules below.
                Each module is PIN-protected — contact your manager if you need access.
              </p>
            </div>
            <div className="no-print" style={{ flexShrink: 0 }}>
              <HippoMascot mood="sunglasses" size={130} opacity={0.95} />
            </div>
          </div>
        </div>
      </section>

      {/* Module cards */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '36px 20px 80px' }}>
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.05rem',
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          Your modules
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Sales Training */}
          <Link href="/sales" style={{ textDecoration: 'none' }}>
            <div
              style={{
                background: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '20px',
                padding: '32px 28px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#E91E8C'
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 10px 32px rgba(233,30,140,0.18)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#e5e7eb'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '18px' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #CC0066, #E91E8C)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    flexShrink: 0,
                  }}
                >
                  💼
                </div>
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      background: '#fde8f4',
                      color: '#CC0066',
                      borderRadius: '12px',
                      padding: '2px 10px',
                      fontSize: '0.66rem',
                      fontWeight: 900,
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    PIN required
                  </div>
                  <h3 style={{ fontWeight: 900, fontSize: '1.15rem', color: '#1A1A2E', margin: 0 }}>
                    Sales Training
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '0.84rem', color: '#6b7280', fontWeight: 600, lineHeight: 1.65, marginBottom: '20px' }}>
                Everything a StoryHippo sales rep needs: product knowledge, school onboarding scripts,
                objection handling, and pricing guidance.
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {['Product overview', 'Onboarding flow', 'Pricing', 'Objection handling'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: '#fde8f4',
                      color: '#CC0066',
                      borderRadius: '12px',
                      padding: '3px 10px',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1.5px solid #f3f4f6',
                  paddingTop: '14px',
                }}
              >
                <span style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 700 }}>
                  🔒 Sales team PIN
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: 900, color: '#E91E8C' }}>
                  Open module &rarr;
                </span>
              </div>
            </div>
          </Link>

          {/* Sandbox Pilot */}
          <Link href="/sandbox" style={{ textDecoration: 'none' }}>
            <div
              style={{
                background: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '20px',
                padding: '32px 28px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#9C27B0'
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 10px 32px rgba(156,39,176,0.18)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#e5e7eb'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '18px' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #4A148C, #9C27B0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    flexShrink: 0,
                  }}
                >
                  🧪
                </div>
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      background: '#f3e8ff',
                      color: '#7B2D8B',
                      borderRadius: '12px',
                      padding: '2px 10px',
                      fontSize: '0.66rem',
                      fontWeight: 900,
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    PIN required
                  </div>
                  <h3 style={{ fontWeight: 900, fontSize: '1.15rem', color: '#1A1A2E', margin: 0 }}>
                    Sandbox Pilot
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '0.84rem', color: '#6b7280', fontWeight: 600, lineHeight: 1.65, marginBottom: '20px' }}>
                2026 Sandbox pilot materials: school selection criteria, rollout playbook,
                data collection, and impact measurement framework.
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {['100 schools', 'Rollout plan', 'Data & impact', 'Timeline'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: '#f3e8ff',
                      color: '#7B2D8B',
                      borderRadius: '12px',
                      padding: '3px 10px',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1.5px solid #f3f4f6',
                  paddingTop: '14px',
                }}
              >
                <span style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 700 }}>
                  🔒 Sandbox PIN
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: 900, color: '#9C27B0' }}>
                  Open module &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Note */}
        <div
          style={{
            marginTop: '32px',
            background: '#fff8e1',
            border: '1.5px solid #FFD54F',
            borderRadius: '12px',
            padding: '14px 18px',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#5a4000',
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ flexShrink: 0 }}>💡</span>
          <span>
            Each module is protected with a PIN. If you do not have your PIN, contact your
            StoryHippo team manager. PINs are role-specific and should not be shared externally.
          </span>
        </div>
      </div>
    </div>
  )
}
