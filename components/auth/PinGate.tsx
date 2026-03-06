'use client'

import { useState, useEffect, useRef } from 'react'
import HippoMascot from '@/components/training/HippoMascot'
import TribalDecor from '@/components/nav/TribalDecor'
import type { HippoMood } from '@/lib/types'

interface PinGateProps {
  role: 'sales' | 'sandbox'
  children: React.ReactNode
}

const ROLE_CONFIG: Record<string, { label: string; mood: HippoMood; bg: string; accent: string; hint: string }> = {
  sales: {
    label: 'Sales Team Access',
    mood: 'sunglasses',
    bg: 'linear-gradient(135deg, #CC0066 0%, #E91E8C 60%, #FF4DB2 100%)',
    accent: '#E91E8C',
    hint: 'Enter your sales team PIN to access training materials.',
  },
  sandbox: {
    label: 'Sandbox Pilot Access',
    mood: 'think',
    bg: 'linear-gradient(135deg, #4A148C 0%, #9C27B0 100%)',
    accent: '#9C27B0',
    hint: 'Enter your sandbox pilot PIN to access this area.',
  },
}

export default function PinGate({ role, children }: PinGateProps) {
  const [unlocked, setUnlocked] = useState(false)
  const [checking, setChecking] = useState(true)
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [shake, setShake] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const storageKey = `sh_access_${role}`
  const config = ROLE_CONFIG[role]

  useEffect(() => {
    if (sessionStorage.getItem(storageKey) === 'granted') {
      setUnlocked(true)
    }
    setChecking(false)
    setTimeout(() => inputRef.current?.focus(), 100)
  }, [storageKey])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!pin.trim()) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/verify-pin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: pin.trim(), role }),
      })

      if (res.ok) {
        sessionStorage.setItem(storageKey, 'granted')
        setUnlocked(true)
      } else {
        setError('Incorrect PIN. Contact your manager if you need access.')
        setPin('')
        setShake(true)
        setTimeout(() => setShake(false), 600)
        setTimeout(() => inputRef.current?.focus(), 100)
      }
    } catch {
      setError('Connection error — please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (checking) return null
  if (unlocked) return <>{children}</>

  return (
    <div
      style={{
        minHeight: '100vh',
        background: config.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Corner accents */}
      <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.18} size={160} />
      <TribalDecor style={{ position: 'absolute', bottom: 0, left: 0 }} corner="bottom-left" opacity={0.12} size={140} />

      {/* Lock card */}
      <div
        style={{
          background: 'white',
          borderRadius: '24px',
          padding: '44px 40px 36px',
          maxWidth: '380px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
          position: 'relative',
          zIndex: 1,
          animation: shake ? 'shake 0.5s ease' : 'none',
        }}
      >
        {/* Hippo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <HippoMascot mood={config.mood} size={110} />
        </div>

        {/* Heading */}
        <div
          style={{
            display: 'inline-block',
            background: config.bg,
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
          Restricted
        </div>
        <h1
          style={{
            fontWeight: 900,
            fontSize: '1.25rem',
            color: '#1A1A2E',
            marginBottom: '8px',
            lineHeight: 1.2,
          }}
        >
          {config.label}
        </h1>
        <p
          style={{
            fontSize: '0.82rem',
            color: '#6b7280',
            fontWeight: 600,
            marginBottom: '28px',
            lineHeight: 1.55,
          }}
        >
          {config.hint}
        </p>

        {/* PIN form */}
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="password"
            inputMode="numeric"
            value={pin}
            onChange={(e) => { setPin(e.target.value); setError('') }}
            placeholder="• • • • • •"
            maxLength={12}
            required
            style={{
              width: '100%',
              padding: '14px 16px',
              fontSize: '1.4rem',
              textAlign: 'center',
              letterSpacing: '0.4em',
              border: `2px solid ${error ? '#ef4444' : '#e5e7eb'}`,
              borderRadius: '14px',
              outline: 'none',
              marginBottom: error ? '8px' : '16px',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 700,
              transition: 'border-color 0.15s',
              boxSizing: 'border-box',
            }}
          />

          {error && (
            <p
              style={{
                color: '#ef4444',
                fontSize: '0.78rem',
                fontWeight: 700,
                marginBottom: '14px',
                lineHeight: 1.4,
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !pin.trim()}
            style={{
              width: '100%',
              padding: '14px',
              background: loading || !pin.trim() ? '#e5e7eb' : config.bg,
              color: loading || !pin.trim() ? '#9ca3af' : 'white',
              border: 'none',
              borderRadius: '14px',
              fontSize: '0.92rem',
              fontWeight: 900,
              cursor: loading || !pin.trim() ? 'not-allowed' : 'pointer',
              letterSpacing: '0.5px',
              fontFamily: 'Nunito, sans-serif',
              transition: 'all 0.15s',
            }}
          >
            {loading ? 'Verifying…' : '🔓 Unlock'}
          </button>
        </form>

        <p style={{ marginTop: '20px', fontSize: '0.72rem', color: '#d1d5db', fontWeight: 600 }}>
          Need access? Contact your StoryHippo team manager.
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-6px); }
          80%       { transform: translateX(6px); }
        }
      `}</style>
    </div>
  )
}
