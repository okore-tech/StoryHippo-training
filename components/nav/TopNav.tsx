'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HippoLogo from './HippoLogo'

export default function TopNav() {
  const pathname = usePathname()

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '52px',
        background: '#1A1A2E',
        borderBottom: '2px solid #E91E8C',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '0 20px',
        zIndex: 300,
      }}
    >
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
      >
        <HippoLogo size={30} />
        <span
          style={{
            color: '#F8A4D4',
            fontWeight: 900,
            fontSize: '0.88rem',
            letterSpacing: '1px',
            fontFamily: 'Nunito, sans-serif',
          }}
        >
          STORYHIPPO
        </span>
        <span
          style={{
            background: 'linear-gradient(90deg, #E91E8C, #7B2D8B)',
            color: 'white',
            borderRadius: '20px',
            padding: '3px 12px',
            fontSize: '0.68rem',
            fontWeight: 900,
            letterSpacing: '1px',
          }}
        >
          TRAINING HUB
        </span>
      </Link>

      {/* Role quick-links — desktop */}
      <nav
        style={{
          marginLeft: 'auto',
          display: 'flex',
          gap: '6px',
          alignItems: 'center',
        }}
        className="no-print"
      >
        {[
          { href: '/sales', label: '💼 Sales', color: '#E91E8C' },
          { href: '/teachers', label: '🍎 Teachers', color: '#1565C0' },
          { href: '/learners', label: '👧 Learners', color: '#FF6B35' },
          { href: '/parents', label: '👨‍👩‍👧 Parents', color: '#2E7D32' },
          { href: '/sandbox', label: '🧪 Sandbox', color: '#7B2D8B' },
        ].map(({ href, label, color }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              style={{
                padding: '4px 12px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 800,
                textDecoration: 'none',
                background: active ? color : 'rgba(255,255,255,.08)',
                color: active ? 'white' : 'rgba(255,255,255,.7)',
                border: `1.5px solid ${active ? color : 'rgba(255,255,255,.12)'}`,
                transition: 'all .15s',
                fontFamily: 'Nunito, sans-serif',
              }}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
