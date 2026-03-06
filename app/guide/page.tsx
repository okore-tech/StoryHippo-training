'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import HippoMascot from '@/components/training/HippoMascot'
import TribalDecor from '@/components/nav/TribalDecor'
import GuidedStep from '@/components/guide/GuidedStep'
import { ROLE_GUIDES } from '@/lib/guide-content'
import type { RoleGuide } from '@/lib/guide-content'

export default function GuidePage() {
  const [selectedRole, setSelectedRole] = useState<RoleGuide | null>(null)
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({})
  const router = useRouter()

  // Restore saved progress when a role is selected
  useEffect(() => {
    if (!selectedRole) return
    try {
      const saved = localStorage.getItem(`sh_guide_${selectedRole.id}`)
      if (saved) setCompletedSteps(JSON.parse(saved))
    } catch { /* ignore */ }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRole?.id])

  function markComplete(stepId: string) {
    setCompletedSteps((prev) => {
      const next = { ...prev, [stepId]: true }
      if (selectedRole) {
        try { localStorage.setItem(`sh_guide_${selectedRole.id}`, JSON.stringify(next)) } catch { /* ignore */ }
      }
      return next
    })
  }

  function resetRole() {
    if (selectedRole) {
      try { localStorage.removeItem(`sh_guide_${selectedRole.id}`) } catch { /* ignore */ }
    }
    setSelectedRole(null)
    setCompletedSteps({})
  }

  if (!selectedRole) {
    return <RoleSelection onSelect={setSelectedRole} onBack={() => router.push('/')} />
  }

  const totalSteps = selectedRole.steps.length
  const doneCount = selectedRole.steps.filter((s) => completedSteps[s.id]).length
  const progress = Math.round((doneCount / totalSteps) * 100)

  return (
    <div style={{ background: '#f4f5f9', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: selectedRole.bg,
          padding: '36px 32px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.18} size={160} />
        <TribalDecor style={{ position: 'absolute', bottom: 0, left: 0 }} corner="bottom-left" opacity={0.1} size={120} />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Back */}
          <button
            onClick={resetRole}
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
              marginBottom: '20px',
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            ← Change role
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
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
                {selectedRole.emoji} {selectedRole.title}
              </div>
              <h1 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '8px' }}>
                {selectedRole.subtitle}
              </h1>
              {selectedRole.disclaimer && (
                <div
                  style={{
                    background: 'rgba(0,0,0,0.2)',
                    border: '1.5px solid rgba(255,255,255,0.2)',
                    borderRadius: '10px',
                    padding: '8px 14px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.9)',
                    marginTop: '10px',
                    lineHeight: 1.5,
                  }}
                >
                  ℹ️ {selectedRole.disclaimer}
                </div>
              )}
            </div>
            <div className="no-print" style={{ flexShrink: 0 }}>
              <HippoMascot mood={selectedRole.mood} size={120} opacity={0.95} />
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255,255,255,0.9)' }}>
                Your progress
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'white' }}>
                {doneCount}/{totalSteps} steps
              </span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '8px', height: '8px', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  background: 'white',
                  borderRadius: '8px',
                  transition: 'width 0.4s ease',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '28px 20px 80px' }}>
        {progress === 100 && (
          <div
            style={{
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              color: 'white',
            }}
          >
            <HippoMascot mood="cheer" size={80} />
            <div>
              <h2 style={{ fontWeight: 900, fontSize: '1.2rem', marginBottom: '4px' }}>
                🎉 All steps complete!
              </h2>
              <p style={{ fontSize: '0.86rem', fontWeight: 600, opacity: 0.9, lineHeight: 1.5 }}>
                You have completed the {selectedRole.title} setup guide. You are ready to get started on StoryHippo!
              </p>
            </div>
          </div>
        )}

        {selectedRole.steps.map((step) => (
          <GuidedStep
            key={step.id}
            step={step}
            accentColor={selectedRole.color}
            isCompleted={!!completedSteps[step.id]}
            onComplete={() => markComplete(step.id)}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Role Selection Screen ────────────────────────────────────────────────────

function RoleSelection({ onSelect, onBack }: { onSelect: (r: RoleGuide) => void; onBack: () => void }) {
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
        <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.18} size={160} />
        <TribalDecor style={{ position: 'absolute', bottom: 0, left: 0 }} corner="bottom-left" opacity={0.1} size={120} />
        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <button
            onClick={onBack}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.25)',
              color: 'white', borderRadius: '20px', padding: '5px 14px',
              fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer', marginBottom: '20px',
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            ← Back
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '8px' }}>
                What is your role at the school?
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', fontWeight: 600, lineHeight: 1.6 }}>
                Choose your role to get a step-by-step guide built specifically for you.
              </p>
            </div>
            <HippoMascot mood="wave" size={100} opacity={0.9} className="no-print" />
          </div>
        </div>
      </section>

      {/* Role cards */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 20px 60px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {ROLE_GUIDES.map((role) => (
            <button
              key={role.id}
              onClick={() => onSelect(role)}
              style={{
                background: 'white',
                border: `2px solid #e5e7eb`,
                borderRadius: '16px',
                padding: '24px 20px',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: 'Nunito, sans-serif',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = role.color
                el.style.transform = 'translateY(-3px)'
                el.style.boxShadow = `0 8px 24px ${role.color}33`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = '#e5e7eb'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{role.emoji}</div>
              <h3 style={{ fontWeight: 900, fontSize: '1rem', color: '#1A1A2E', marginBottom: '6px' }}>
                {role.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 600, lineHeight: 1.5, marginBottom: '14px' }}>
                {role.subtitle}
              </p>
              <span
                style={{
                  display: 'inline-block',
                  background: role.color,
                  color: 'white',
                  borderRadius: '20px',
                  padding: '4px 14px',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                }}
              >
                {role.steps.length} steps →
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
