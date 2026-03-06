'use client'

import { useState } from 'react'
import type { GuideStep } from '@/lib/guide-content'

interface GuidedStepProps {
  step: GuideStep
  accentColor: string
  isCompleted: boolean
  onComplete: () => void
}

export default function GuidedStep({ step, accentColor, isCompleted, onComplete }: GuidedStepProps) {
  const [openBranch, setOpenBranch] = useState<string | null>(null)
  const [checked, setChecked] = useState<Record<number, boolean>>({})
  const [showTest, setShowTest] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)

  const allChecked = step.testItems
    ? step.testItems.every((_, i) => checked[i])
    : true

  function toggleCheck(i: number) {
    const next = { ...checked, [i]: !checked[i] }
    setChecked(next)
    if (step.testItems?.every((_, idx) => next[idx])) onComplete()
  }

  return (
    <div
      style={{
        background: isCompleted ? '#f0fdf4' : 'white',
        border: `2px solid ${isCompleted ? '#86efac' : '#e5e7eb'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        marginBottom: '16px',
        transition: 'border-color 0.2s, background 0.2s',
      }}
    >
      {/* Step header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '20px 20px 0' }}>
        {/* Number badge */}
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: isCompleted ? '#22c55e' : accentColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 900,
            fontSize: '1rem',
            flexShrink: 0,
            transition: 'background 0.3s',
          }}
        >
          {isCompleted ? '✓' : step.number}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '1.2rem' }}>{step.emoji}</span>
            <h3 style={{ fontWeight: 900, fontSize: '0.98rem', color: '#1A1A2E', margin: 0 }}>
              {step.title}
            </h3>
          </div>
          <p style={{ fontSize: '0.86rem', color: '#444', lineHeight: 1.6, fontWeight: 600, margin: 0 }}>
            {step.body}
          </p>
        </div>
      </div>

      {/* Important note */}
      {step.important && (
        <div
          style={{
            margin: '12px 20px 0',
            background: '#fef9c3',
            border: '1.5px solid #fbbf24',
            borderRadius: '10px',
            padding: '10px 14px',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#78350f',
            display: 'flex',
            gap: '8px',
          }}
        >
          <span>⚠️</span>
          <span>{step.important}</span>
        </div>
      )}

      {/* Tip */}
      {step.tip && (
        <div
          style={{
            margin: '10px 20px 0',
            background: '#fff8e1',
            borderLeft: '4px solid #FFD54F',
            borderRadius: '0 10px 10px 0',
            padding: '9px 14px',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#5a4000',
            display: 'flex',
            gap: '8px',
          }}
        >
          <span>💡</span>
          <span>{step.tip}</span>
        </div>
      )}

      {/* Screenshot */}
      {step.screenshotId && !imgFailed && (
        <div style={{ margin: '12px 20px 0', borderRadius: '10px', overflow: 'hidden', border: '1.5px solid #e5e7eb' }}>
          <img
            src={`/screenshots/${step.screenshotId}.png`}
            alt={`Screenshot for step ${step.number}`}
            style={{ width: '100%', display: 'block' }}
            onError={() => setImgFailed(true)}
          />
        </div>
      )}
      {step.screenshotId && imgFailed && (
        <div
          style={{
            margin: '12px 20px 0',
            border: '1.5px dashed #d1d5db',
            borderRadius: '10px',
            padding: '14px',
            textAlign: 'center',
            color: '#9ca3af',
            fontSize: '0.75rem',
            fontWeight: 700,
            background: '#fafafa',
          }}
        >
          📸 Add screenshot: /public/screenshots/{step.screenshotId}.png
        </div>
      )}

      {/* Scenario branches */}
      {step.branches && step.branches.length > 0 && (
        <div style={{ padding: '12px 20px 0' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 900, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
            Common scenarios
          </p>
          {step.branches.map((branch) => (
            <div key={branch.id} style={{ marginBottom: '8px' }}>
              <button
                onClick={() => setOpenBranch(openBranch === branch.id ? null : branch.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  background: openBranch === branch.id ? '#fde8f4' : '#f9fafb',
                  border: `1.5px solid ${openBranch === branch.id ? accentColor + '66' : '#e5e7eb'}`,
                  borderRadius: '10px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s',
                  fontFamily: 'Nunito, sans-serif',
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{branch.emoji}</span>
                <span style={{ flex: 1, fontSize: '0.82rem', fontWeight: 800, color: '#1A1A2E' }}>
                  {branch.trigger}
                </span>
                <span
                  style={{
                    color: accentColor,
                    fontSize: '0.75rem',
                    transform: openBranch === branch.id ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s',
                  }}
                >
                  ▼
                </span>
              </button>

              {openBranch === branch.id && (
                <div
                  style={{
                    background: '#fde8f4',
                    border: `1.5px solid ${accentColor}44`,
                    borderTop: 'none',
                    borderRadius: '0 0 10px 10px',
                    padding: '12px 16px',
                  }}
                >
                  <ol style={{ margin: 0, paddingLeft: '18px' }}>
                    {branch.steps.map((s, i) => (
                      <li
                        key={i}
                        style={{ fontSize: '0.82rem', color: '#444', fontWeight: 600, lineHeight: 1.6, marginBottom: '4px' }}
                      >
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Test it section */}
      {step.testItems && step.testItems.length > 0 && (
        <div style={{ padding: '12px 20px 16px' }}>
          <button
            onClick={() => setShowTest(!showTest)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: showTest ? accentColor : 'transparent',
              color: showTest ? 'white' : accentColor,
              border: `2px solid ${accentColor}`,
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '0.78rem',
              fontWeight: 900,
              fontFamily: 'Nunito, sans-serif',
              transition: 'all 0.15s',
            }}
          >
            <span>✅</span>
            <span>{showTest ? 'Hide checklist' : 'Test it — check your progress'}</span>
          </button>

          {showTest && (
            <div
              style={{
                marginTop: '12px',
                background: '#f9fafb',
                borderRadius: '12px',
                padding: '14px 16px',
                border: '1.5px solid #e5e7eb',
              }}
            >
              <p style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6b7280', marginBottom: '10px' }}>
                Tick each item once you have done it:
              </p>
              {step.testItems.map((item, i) => (
                <label
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    cursor: 'pointer',
                    marginBottom: '8px',
                    padding: '6px 8px',
                    borderRadius: '8px',
                    background: checked[i] ? '#dcfce7' : 'transparent',
                    transition: 'background 0.15s',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={!!checked[i]}
                    onChange={() => toggleCheck(i)}
                    style={{ marginTop: '2px', accentColor, cursor: 'pointer', width: '16px', height: '16px' }}
                  />
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: checked[i] ? '#166534' : '#374151',
                      textDecoration: checked[i] ? 'line-through' : 'none',
                      transition: 'all 0.15s',
                    }}
                  >
                    {item}
                  </span>
                </label>
              ))}

              {allChecked && (
                <div
                  style={{
                    marginTop: '10px',
                    background: '#22c55e',
                    color: 'white',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    fontSize: '0.82rem',
                    fontWeight: 900,
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                  }}
                >
                  <span>🎉</span>
                  <span>Step {step.number} complete! Move to the next step.</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Bottom padding when no test */}
      {(!step.testItems || step.testItems.length === 0) && (
        <div style={{ paddingBottom: '16px' }} />
      )}
    </div>
  )
}
