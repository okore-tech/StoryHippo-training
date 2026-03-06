'use client'

import { useState } from 'react'
import type { HippoMood } from '@/lib/types'

interface HippoMascotProps {
  mood?: HippoMood
  size?: number
  className?: string
  opacity?: number
}

// Drop PNG files in /public/hippo/{mood}.png to override the SVG fallback.
// e.g. /public/hippo/wave.png, /public/hippo/read.png, etc.

export default function HippoMascot({
  mood = 'wave',
  size = 120,
  className = '',
  opacity = 1,
}: HippoMascotProps) {
  const [imgFailed, setImgFailed] = useState(false)

  if (!imgFailed) {
    return (
      <img
        src={`/hippo/${mood}.png`}
        alt={`StoryHippo mascot — ${mood}`}
        width={size}
        height={size}
        className={className}
        style={{ opacity, objectFit: 'contain' }}
        onError={() => setImgFailed(true)}
      />
    )
  }

  // SVG fallback when no PNG is available
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-label={`StoryHippo mascot — ${mood}`}
    >
      {/* Body */}
      <ellipse cx="60" cy="75" rx="38" ry="28" fill="#E91E8C" />

      {/* Left ear */}
      <ellipse cx="32" cy="48" rx="14" ry="12" fill="#E91E8C" />
      <ellipse cx="32" cy="49" rx="8" ry="7" fill="#F8A4D4" />

      {/* Right ear */}
      <ellipse cx="88" cy="48" rx="14" ry="12" fill="#E91E8C" />
      <ellipse cx="88" cy="49" rx="8" ry="7" fill="#F8A4D4" />

      {/* Head */}
      <ellipse cx="60" cy="58" rx="30" ry="26" fill="#E91E8C" />

      {/* Eyes */}
      <circle cx="50" cy="50" r="6" fill="white" />
      <circle cx="70" cy="50" r="6" fill="white" />
      <circle cx="51" cy="51" r="3" fill="#1A1A2E" />
      <circle cx="71" cy="51" r="3" fill="#1A1A2E" />
      <circle cx="52.5" cy="50" r="1.2" fill="white" />
      <circle cx="72.5" cy="50" r="1.2" fill="white" />

      {/* Nostrils */}
      <ellipse cx="55" cy="65" rx="5" ry="3.5" fill="#C01070" />
      <ellipse cx="65" cy="65" rx="5" ry="3.5" fill="#C01070" />
      <circle cx="55" cy="65" r="1.5" fill="#1A1A2E" />
      <circle cx="65" cy="65" r="1.5" fill="#1A1A2E" />

      {/* Mouth */}
      {(mood === 'wave' || mood === 'cheer' || mood === 'sunglasses') && (
        <path d="M50 72 Q60 80 70 72" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      )}
      {mood === 'read' && (
        <path d="M52 72 Q60 77 68 72" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      )}
      {mood === 'think' && (
        <path d="M52 74 Q60 71 68 74" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      )}

      {/* Sunglasses */}
      {mood === 'sunglasses' && (
        <>
          <rect x="42" y="46" width="16" height="10" rx="5" fill="#1A1A2E" />
          <rect x="62" y="46" width="16" height="10" rx="5" fill="#1A1A2E" />
          <line x1="58" y1="51" x2="62" y2="51" stroke="#1A1A2E" strokeWidth="2" />
          <line x1="38" y1="51" x2="42" y2="51" stroke="#1A1A2E" strokeWidth="2" />
          <line x1="78" y1="51" x2="82" y2="51" stroke="#1A1A2E" strokeWidth="2" />
        </>
      )}

      {/* Waving arm */}
      {mood === 'wave' && (
        <path d="M98 60 Q108 48 105 38 Q102 30 96 34 Q90 38 95 48 Q98 55 98 60Z" fill="#E91E8C" />
      )}

      {/* Cheering arms */}
      {mood === 'cheer' && (
        <>
          <path d="M22 65 Q12 50 16 40 Q20 32 26 36 Q32 40 26 52 Q23 58 22 65Z" fill="#E91E8C" />
          <path d="M98 65 Q108 50 104 40 Q100 32 94 36 Q88 40 94 52 Q97 58 98 65Z" fill="#E91E8C" />
        </>
      )}

      {/* Book for read */}
      {mood === 'read' && (
        <>
          <rect x="28" y="78" width="32" height="22" rx="3" fill="#1565C0" />
          <line x1="44" y1="78" x2="44" y2="100" stroke="white" strokeWidth="1.5" />
          <line x1="32" y1="84" x2="43" y2="84" stroke="white" strokeWidth="1" opacity="0.6" />
          <line x1="32" y1="89" x2="43" y2="89" stroke="white" strokeWidth="1" opacity="0.6" />
          <line x1="32" y1="94" x2="43" y2="94" stroke="white" strokeWidth="1" opacity="0.6" />
          <line x1="45" y1="84" x2="56" y2="84" stroke="white" strokeWidth="1" opacity="0.6" />
          <line x1="45" y1="89" x2="56" y2="89" stroke="white" strokeWidth="1" opacity="0.6" />
          <path d="M22 80 Q18 78 22 90 Q26 98 32 98" stroke="#E91E8C" strokeWidth="6" strokeLinecap="round" fill="none" />
        </>
      )}

      {/* Thinking bubble */}
      {mood === 'think' && (
        <>
          <circle cx="82" cy="42" r="3" fill="white" opacity="0.6" />
          <circle cx="90" cy="34" r="5" fill="white" opacity="0.7" />
          <circle cx="100" cy="24" r="8" fill="white" opacity="0.85" />
          <text x="96" y="27" fontSize="8" fill="#E91E8C" textAnchor="middle">?</text>
        </>
      )}

      {/* Legs */}
      <ellipse cx="44" cy="98" rx="10" ry="6" fill="#C01070" />
      <ellipse cx="76" cy="98" rx="10" ry="6" fill="#C01070" />
    </svg>
  )
}
