'use client'

import Link from 'next/link'
import HippoMascot from '@/components/training/HippoMascot'
import TribalDecor from '@/components/nav/TribalDecor'

export default function HomePage() {
  return (
    <div style={{ background: '#f4f5f9', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #CC0066 0%, #E91E8C 60%, #FF4DB2 100%)',
          padding: '56px 32px 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.18} size={200} />
        <TribalDecor style={{ position: 'absolute', bottom: 0, left: 0 }} corner="bottom-left" opacity={0.1} size={160} />

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.18)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                borderRadius: '20px',
                padding: '4px 14px',
                fontSize: '0.68rem',
                fontWeight: 900,
                letterSpacing: '1.5px',
                color: 'white',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Storymoja · StoryHippo · 2026
            </div>
            <h1
              style={{
                color: 'white',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                lineHeight: 1.12,
                marginBottom: '16px',
              }}
            >
              Africa reads.<br />
              <span style={{ color: '#F8A4D4' }}>StoryHippo</span> makes it happen.
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1rem',
                fontWeight: 600,
                lineHeight: 1.7,
                maxWidth: '520px',
                marginBottom: '28px',
              }}
            >
              50 million children across Africa lack access to books in their mother tongue.
              StoryHippo is changing that — one school, one classroom, one story at a time.
            </p>
            <a
              href="#who-are-you"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'white',
                color: '#CC0066',
                borderRadius: '28px',
                padding: '12px 28px',
                fontWeight: 900,
                fontSize: '0.92rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                letterSpacing: '0.3px',
              }}
            >
              Get Started &rarr;
            </a>
          </div>
          <div className="no-print" style={{ flexShrink: 0 }}>
            <HippoMascot mood="wave" size={170} opacity={0.95} />
          </div>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section style={{ background: '#1A1A2E', padding: '52px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                emoji: '📖',
                color: '#E91E8C',
                title: 'The literacy gap',
                body:
                  'Millions of African children cannot read with comprehension by age 10. Most school content is in English — a second or third language for most learners.',
              },
              {
                emoji: '🦛',
                color: '#7B2D8B',
                title: 'Our solution',
                body:
                  'StoryHippo by Storymoja delivers mother-tongue digital books, assessments, and teacher tools — accessible on any device, even offline.',
              },
              {
                emoji: '🌍',
                color: '#1565C0',
                title: 'Who we serve',
                body:
                  'Schools, teachers, parents and learners across Kenya and beyond. From Grade 1 readers to secondary libraries — built for African classrooms.',
              },
            ].map(({ emoji, color, title, body }) => (
              <div
                key={title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: `1.5px solid ${color}44`,
                  borderRadius: '16px',
                  padding: '24px 20px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: color + '22',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    marginBottom: '14px',
                  }}
                >
                  {emoji}
                </div>
                <h3 style={{ color: 'white', fontWeight: 900, fontSize: '1rem', marginBottom: '8px' }}>
                  {title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.84rem', fontWeight: 600, lineHeight: 1.65 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Impact strip */}
          <div
            style={{
              marginTop: '32px',
              display: 'flex',
              gap: '0',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1.5px solid rgba(255,255,255,0.08)',
            }}
          >
            {[
              { val: '50M+', lbl: 'Children underserved', color: '#E91E8C' },
              { val: '100', lbl: 'Sandbox schools 2026', color: '#7B2D8B' },
              { val: '4', lbl: 'Literacy levels', color: '#1565C0' },
              { val: '6+', lbl: 'Languages supported', color: '#2E7D32' },
            ].map(({ val, lbl, color }, i) => (
              <div
                key={lbl}
                style={{
                  flex: 1,
                  padding: '20px 16px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.07)',
                  textAlign: 'center',
                  borderRight: i < 3 ? '1.5px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color, lineHeight: 1, marginBottom: '4px' }}>
                  {val}
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>
                  {lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform overview ── */}
      <section style={{ background: 'white', padding: '52px 32px', borderBottom: '1.5px solid #e5e7eb' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #E91E8C, #7B2D8B)',
                borderRadius: '20px',
                padding: '4px 16px',
                fontSize: '0.68rem',
                fontWeight: 900,
                color: 'white',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              What StoryHippo offers
            </div>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: '#1A1A2E', lineHeight: 1.2 }}>
              A complete literacy ecosystem
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '14px',
            }}
          >
            {[
              { icon: '📚', label: 'Digital library', desc: 'Mother-tongue & English books for every level' },
              { icon: '📝', label: 'Assessments', desc: 'Reading fluency & comprehension checks' },
              { icon: '📊', label: 'Teacher reports', desc: 'Track learner progress in real time' },
              { icon: '👨‍👩‍👧', label: 'Parent portal', desc: 'Follow your child\'s reading journey' },
              { icon: '🎓', label: 'Teacher guides', desc: 'Lesson plans, resources & best practice' },
              { icon: '🧪', label: 'Sandbox pilot', desc: '100 schools, measurable literacy outcomes' },
            ].map(({ icon, label, desc }) => (
              <div
                key={label}
                style={{
                  background: '#f9fafb',
                  border: '1.5px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '18px 16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.84rem', color: '#1A1A2E', marginBottom: '3px' }}>{label}</div>
                  <div style={{ fontSize: '0.73rem', color: '#6b7280', fontWeight: 600, lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who are you? ── */}
      <section id="who-are-you" style={{ padding: '60px 32px 80px', background: '#f4f5f9' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #E91E8C, #7B2D8B)',
              borderRadius: '20px',
              padding: '4px 16px',
              fontSize: '0.68rem',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Tell us who you are
          </div>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: '#1A1A2E', marginBottom: '10px' }}>
            Where do you want to go?
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: 600, lineHeight: 1.6, marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
            Choose your path. We will give you a step-by-step guide built specifically for your role.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {/* Internal */}
            <Link href="/internal" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #CC0066 0%, #E91E8C 60%, #FF4DB2 100%)',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 20px rgba(204,0,102,0.25)',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 12px 36px rgba(204,0,102,0.35)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 4px 20px rgba(204,0,102,0.25)'
                }}
              >
                <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.15} size={120} />
                <div style={{ fontSize: '2.8rem', marginBottom: '14px' }}>🏢</div>
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '16px',
                    padding: '3px 12px',
                    fontSize: '0.65rem',
                    fontWeight: 900,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  Storymoja Team
                </div>
                <h3 style={{ fontWeight: 900, fontSize: '1.25rem', marginBottom: '8px', lineHeight: 1.2 }}>
                  Internal Team
                </h3>
                <p style={{ fontSize: '0.84rem', fontWeight: 600, opacity: 0.85, lineHeight: 1.6, marginBottom: '20px' }}>
                  Storymoja employees. Access Sales training and the Sandbox pilot programme.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  {['💼 Sales', '🧪 Sandbox'].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: 'rgba(255,255,255,0.18)',
                        border: '1.5px solid rgba(255,255,255,0.25)',
                        borderRadius: '14px',
                        padding: '3px 12px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: '22px', fontWeight: 900, fontSize: '0.85rem', opacity: 0.9 }}>
                  Enter &rarr;
                </div>
              </div>
            </Link>

            {/* External */}
            <Link href="/guide" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #1565C0 0%, #1976D2 60%, #42A5F5 100%)',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 20px rgba(21,101,192,0.25)',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 12px 36px rgba(21,101,192,0.35)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 4px 20px rgba(21,101,192,0.25)'
                }}
              >
                <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.15} size={120} />
                <div style={{ fontSize: '2.8rem', marginBottom: '14px' }}>🏫</div>
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '16px',
                    padding: '3px 12px',
                    fontSize: '0.65rem',
                    fontWeight: 900,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  School / Institution
                </div>
                <h3 style={{ fontWeight: 900, fontSize: '1.25rem', marginBottom: '8px', lineHeight: 1.2 }}>
                  External — School
                </h3>
                <p style={{ fontSize: '0.84rem', fontWeight: 600, opacity: 0.85, lineHeight: 1.6, marginBottom: '20px' }}>
                  Teachers, admins, parents and learners. Get a personalised step-by-step setup guide.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['🍎 Teacher', '🏛 Admin', '👨‍👩‍👧 Parent', '👧 Learner'].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: 'rgba(255,255,255,0.18)',
                        border: '1.5px solid rgba(255,255,255,0.25)',
                        borderRadius: '14px',
                        padding: '3px 12px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: '22px', fontWeight: 900, fontSize: '0.85rem', opacity: 0.9 }}>
                  Choose my role &rarr;
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
