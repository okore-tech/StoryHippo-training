'use client'

import Link from 'next/link'
import HippoMascot from '@/components/training/HippoMascot'
import TribalDecor from '@/components/nav/TribalDecor'
import { ROLES, CONTENT_TYPES } from '@/lib/content'

export default function HomePage() {
  return (
    <div style={{ background: '#f4f5f9', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #CC0066 0%, #E91E8C 60%, #FF4DB2 100%)',
          padding: '48px 32px 52px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Tribal decorative accents */}
        <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.18} size={180} />
        <TribalDecor style={{ position: 'absolute', bottom: 0, left: 0 }} corner="bottom-left" opacity={0.1} size={140} />
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '32px', position: 'relative', zIndex: 1 }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #E91E8C, #7B2D8B)',
                borderRadius: '20px',
                padding: '4px 14px',
                fontSize: '0.7rem',
                fontWeight: 900,
                letterSpacing: '1.5px',
                color: 'white',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              Sales & Teacher Training · 2026
            </div>
            <h1
              style={{
                color: 'white',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: '12px',
              }}
            >
              Welcome to <span style={{ color: '#F8A4D4' }}>StoryHippo</span>
              <br />Training HQ
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,.75)',
                fontSize: '0.95rem',
                fontWeight: 600,
                lineHeight: 1.6,
                maxWidth: '520px',
                marginBottom: '20px',
              }}
            >
              Your complete guide to onboarding schools, training teachers, and launching
              the Sandbox pilot across Africa.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['💼 Sales Team', '🍎 Educators', '👧 Learners', '🧪 Sandbox 2026', '🌍 Empowering Africa'].map(
                (chip) => (
                  <span
                    key={chip}
                    style={{
                      background: 'rgba(255,255,255,.1)',
                      border: '1.5px solid rgba(255,255,255,.15)',
                      color: 'rgba(255,255,255,.85)',
                      borderRadius: '20px',
                      padding: '5px 13px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>
          <div style={{ flexShrink: 0 }} className="no-print">
            <HippoMascot mood="wave" size={160} opacity={0.92} />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 24px 60px' }}>
        {/* Stats strip */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {[
            { val: '6', lbl: 'Content Types', color: '#E91E8C' },
            { val: '6', lbl: 'User Roles', color: '#7B2D8B' },
            { val: '4', lbl: 'Literacy Levels', color: '#1565C0' },
            { val: '100', lbl: 'Sandbox Schools', color: '#2E7D32' },
            { val: '5', lbl: 'Literacy Pillars', color: '#FF6B35' },
          ].map(({ val, lbl, color }) => (
            <div
              key={lbl}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '14px 18px',
                flex: '1 1 120px',
                border: '1.5px solid #e5e7eb',
                boxShadow: '0 1px 4px rgba(0,0,0,.05)',
              }}
            >
              <div style={{ fontSize: '1.7rem', fontWeight: 900, color, lineHeight: 1, marginBottom: '4px' }}>
                {val}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6b7280' }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* Role cards */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.15rem',
            color: '#1A1A2E',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>🎯</span> Jump to Your Role
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))',
            gap: '14px',
            marginBottom: '36px',
          }}
        >
          {ROLES.map((role) => (
            <Link
              key={role.id}
              href={role.href}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: 'white',
                  borderRadius: '14px',
                  padding: '20px 16px',
                  textAlign: 'center',
                  border: '2px solid #e5e7eb',
                  cursor: 'pointer',
                  boxShadow: '0 1px 4px rgba(0,0,0,.06)',
                  transition: 'all .2s',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = role.color
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = `0 4px 16px ${role.color}22`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#e5e7eb'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 1px 4px rgba(0,0,0,.06)'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{role.emoji}</div>
                <h3
                  style={{
                    fontWeight: 900,
                    fontSize: '0.9rem',
                    color: '#1A1A2E',
                    marginBottom: '5px',
                  }}
                >
                  {role.label}
                </h3>
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: '10px',
                  }}
                >
                  {role.description}
                </p>
                <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      background: '#f3f4f6',
                      color: '#374151',
                      borderRadius: '12px',
                      padding: '2px 8px',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                    }}
                  >
                    {role.moduleCount} modules
                  </span>
                  <span
                    style={{
                      background: '#f3f4f6',
                      color: '#374151',
                      borderRadius: '12px',
                      padding: '2px 8px',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                    }}
                  >
                    ~{role.estimatedTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Content types strip */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.15rem',
            color: '#1A1A2E',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>📚</span> Platform Content Types
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {CONTENT_TYPES.map((ct) => (
            <div
              key={ct.label}
              style={{
                background: 'white',
                border: '1.5px solid #e5e7eb',
                borderRadius: '12px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>{ct.icon}</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#1A1A2E' }}>{ct.label}</div>
                <div style={{ fontSize: '0.72rem', color: '#6b7280', fontWeight: 600 }}>{ct.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div
          style={{
            marginTop: '32px',
            background: '#e3f2fd',
            border: '1.5px solid #42A5F5',
            borderRadius: '12px',
            padding: '14px 18px',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#0d47a1',
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ flexShrink: 0, fontSize: '1rem' }}>ℹ️</span>
          <span>
            <strong>Content Reference:</strong> Steps and UI labels are based on the live platform at
            web.storyhippoafrica.com. If you notice any discrepancies, contact the Storymoja EdTech team to update this hub.
          </span>
        </div>
      </div>
    </div>
  )
}
