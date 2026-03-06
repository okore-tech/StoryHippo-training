'use client'

import { useState } from 'react'
import TipBox from './TipBox'
import type { TrainingStep } from '@/lib/types'

interface StepCardProps {
  step: TrainingStep
  accentColor?: string
  showVerification?: boolean
}

// Screenshot images are loaded from /public/screenshots/{step.id}.png
// Drop files there to have them appear automatically in the hub.

function ScreenshotSlot({ stepId, label }: { stepId: number | string; label: string }) {
  const [failed, setFailed] = useState(false)

  if (!failed) {
    return (
      <div style={{ marginTop: '10px', borderRadius: '10px', overflow: 'hidden', border: '1.5px solid #e5e7eb' }}>
        <img
          src={`/screenshots/${stepId}.png`}
          alt={label}
          style={{ width: '100%', display: 'block' }}
          onError={() => setFailed(true)}
        />
        <div style={{ padding: '6px 10px', background: '#f9fafb', fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span>📸</span><span>{label}</span>
        </div>
      </div>
    )
  }

  // Placeholder when no image is present
  return (
    <div
      style={{
        border: '1.5px dashed #d1d5db',
        borderRadius: '10px',
        padding: '18px 14px',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        color: '#9ca3af',
        fontSize: '0.75rem',
        fontWeight: 700,
        background: '#fafafa',
        textAlign: 'center',
      }}
    >
      <span style={{ fontSize: '1.4rem' }}>📸</span>
      <span>{label}</span>
      <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#d1d5db' }}>
        Add image: /public/screenshots/{stepId}.png
      </span>
    </div>
  )
}

export default function StepCard({
  step,
  accentColor = '#E91E8C',
  showVerification: _showVerification = false,
}: StepCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
        padding: '14px 0',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      {/* Step number dot */}
      <div
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          background: accentColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 900,
          fontSize: '0.85rem',
          flexShrink: 0,
          marginTop: '2px',
        }}
      >
        {step.emoji || step.id}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h4
          style={{
            fontWeight: 800,
            fontSize: '0.92rem',
            color: '#1A1A2E',
            marginBottom: '4px',
          }}
        >
          {step.title}
        </h4>
        <p
          style={{
            fontSize: '0.84rem',
            color: '#555',
            lineHeight: 1.55,
            fontWeight: 600,
          }}
        >
          {step.body}
        </p>

        {/* Screenshot */}
        {step.screenshotLabel && (
          <ScreenshotSlot stepId={step.id} label={step.screenshotLabel} />
        )}

        {/* Tip / Warning */}
        {step.tip && <TipBox variant="tip">{step.tip}</TipBox>}
        {step.warning && <TipBox variant="warning">{step.warning}</TipBox>}
      </div>
    </div>
  )
}
