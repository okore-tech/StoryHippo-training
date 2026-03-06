'use client'

import { LITERACY_LEVELS, LITERACY_PILLARS } from '@/lib/content'

export default function LiteracyJourney() {
  return (
    <div>
      {/* Level progression */}
      <div
        style={{
          display: 'flex',
          borderRadius: '14px',
          overflow: 'hidden',
          marginBottom: '20px',
          boxShadow: '0 1px 4px rgba(0,0,0,.08)',
        }}
      >
        {LITERACY_LEVELS.map((level, i) => (
          <div
            key={level.label}
            style={{
              flex: 1,
              padding: '16px 10px',
              textAlign: 'center',
              background: level.bg,
              borderRight: i < LITERACY_LEVELS.length - 1 ? '1px solid rgba(0,0,0,.06)' : 'none',
            }}
          >
            <div style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{level.icon}</div>
            <h4 style={{ fontWeight: 900, fontSize: '0.82rem', color: level.color, marginBottom: '4px' }}>
              {level.label}
            </h4>
            <p style={{ fontSize: '0.72rem', color: '#555', fontWeight: 600, lineHeight: 1.3 }}>
              {level.description}
            </p>
          </div>
        ))}
      </div>

      {/* Arrow connector */}
      <div style={{ textAlign: 'center', margin: '-12px 0 16px', color: '#d1d5db', fontSize: '0.85rem', fontWeight: 700 }}>
        ← Progress flows left to right →
      </div>

      {/* Pillars */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(233,30,140,.06), rgba(123,45,139,.06))',
          border: '1.5px solid rgba(233,30,140,.15)',
          borderRadius: '12px',
          padding: '16px 18px',
        }}
      >
        <h4 style={{ fontWeight: 900, fontSize: '0.88rem', color: '#C01070', marginBottom: '12px' }}>
          Five Pillars of Literacy
        </h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {LITERACY_PILLARS.map((pillar) => (
            <span
              key={pillar.label}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.78rem',
                fontWeight: 800,
                background: pillar.bg,
                color: pillar.color,
              }}
            >
              {pillar.icon} {pillar.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
