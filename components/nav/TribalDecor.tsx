// Corner accent matching the StoryHippo app's geometric corner decorations.
// The app uses stacked angular L-bracket / chevron shapes in hero section corners.

import type React from 'react'

interface TribalDecorProps {
  color?: string
  opacity?: number
  size?: number
  className?: string
  style?: React.CSSProperties
  // Which corner this accent faces from (rotates the SVG accordingly)
  corner?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}


export default function TribalDecor({
  color = 'white',
  opacity = 0.12,
  size = 120,
  className = '',
  style,
  corner = 'top-right',
}: TribalDecorProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ ...style, opacity, pointerEvents: 'none', userSelect: 'none' }}
    >
      {/* Nested L-bracket corner accents — matches StoryHippo app corner decorations */}
      <g transform={`rotate(${corner === 'top-right' ? 0 : corner === 'top-left' ? 90 : corner === 'bottom-left' ? 180 : 270}, 60, 60)`}>
        {/* Each bracket is an L-shape from the top-right corner */}
        <polyline points="120,15 105,15 105,120" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <polyline points="120,35 85,35 85,120" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <polyline points="120,55 65,55 65,120" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <polyline points="120,75 45,75 45,120" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <polyline points="120,95 25,95 25,120" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Small tick marks for texture */}
        <line x1="120" y1="8" x2="112" y2="8" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="112" y1="8" x2="112" y2="0" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  )
}
