'use client'

import { useState } from 'react'
import StepCard from './StepCard'
import type { TrainingModule } from '@/lib/types'

interface ModuleSectionProps {
  module: TrainingModule
  defaultOpen?: boolean
  showVerification?: boolean
}

export default function ModuleSection({
  module,
  defaultOpen = false,
  showVerification = false,
}: ModuleSectionProps) {
  const [open, setOpen] = useState(defaultOpen)
  const accent = module.accentColor ?? '#E91E8C'

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '14px',
        border: '1.5px solid #e5e7eb',
        marginBottom: '14px',
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,.05)',
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 20px',
          background: open ? '#FDE8F4' : 'white',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'background 0.15s',
        }}
      >
        {/* Module number */}
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 900,
            fontSize: '0.88rem',
            flexShrink: 0,
          }}
        >
          {module.number}
        </div>

        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontWeight: 900,
              fontSize: '0.96rem',
              color: '#1A1A2E',
              marginBottom: '2px',
            }}
          >
            {module.title}
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 600 }}>
            {module.subtitle}
          </p>
        </div>

        <span
          style={{
            color: open ? accent : '#9ca3af',
            fontSize: '0.88rem',
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.2s',
            flexShrink: 0,
          }}
        >
          ▼
        </span>
      </button>

      {/* Body */}
      {open && (
        <div
          style={{
            padding: '0 20px 20px',
            borderTop: '1.5px solid #e5e7eb',
          }}
        >
          {module.steps.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              accentColor={accent}
              showVerification={showVerification}
            />
          ))}
        </div>
      )}
    </div>
  )
}
