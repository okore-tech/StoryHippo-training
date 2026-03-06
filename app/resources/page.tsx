'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import HippoMascot from '@/components/training/HippoMascot'
import TribalDecor from '@/components/nav/TribalDecor'
import { RESOURCES, TYPE_META, AUDIENCE_META } from '@/lib/resources-content'
import type { ResourceType, ResourceAudience } from '@/lib/resources-content'

const ALL_TYPES: { value: ResourceType | 'all'; label: string; icon: string }[] = [
  { value: 'all',          label: 'All resources', icon: '🗂' },
  { value: 'presentation', label: 'Presentations',  icon: '📊' },
  { value: 'video',        label: 'Videos & Demos', icon: '▶️' },
  { value: 'document',     label: 'Documents',      icon: '📄' },
]

const ALL_AUDIENCES: { value: ResourceAudience | 'all'; label: string }[] = [
  { value: 'all',      label: 'All audiences' },
  { value: 'sales',    label: 'Sales' },
  { value: 'teachers', label: 'Teachers' },
  { value: 'admin',    label: 'Admin' },
  { value: 'sandbox',  label: 'Sandbox' },
]

export default function ResourcesPage() {
  const router = useRouter()
  const [typeFilter, setTypeFilter] = useState<ResourceType | 'all'>('all')
  const [audienceFilter, setAudienceFilter] = useState<ResourceAudience | 'all'>('all')
  const [search, setSearch] = useState('')

  const filtered = RESOURCES.filter((r) => {
    const matchType = typeFilter === 'all' || r.type === typeFilter
    const matchAudience = audienceFilter === 'all' || r.audience.includes(audienceFilter as ResourceAudience) || r.audience.includes('all')
    const q = search.toLowerCase()
    const matchSearch = !q || r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.tags.some((t) => t.includes(q))
    return matchType && matchAudience && matchSearch
  })

  return (
    <div style={{ background: '#f4f5f9', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1A1A2E 0%, #2D1B69 60%, #3D1A78 100%)',
          padding: '40px 32px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <TribalDecor style={{ position: 'absolute', top: 0, right: 0 }} corner="top-right" opacity={0.15} size={180} />
        <TribalDecor style={{ position: 'absolute', bottom: 0, left: 0 }} corner="bottom-left" opacity={0.1} size={140} />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <button
            onClick={() => router.push('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.12)',
              border: '1.5px solid rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '20px',
              padding: '5px 14px',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              marginBottom: '22px',
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            &larr; Back
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '220px' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(233,30,140,0.3)',
                  border: '1.5px solid rgba(233,30,140,0.5)',
                  borderRadius: '20px',
                  padding: '3px 14px',
                  fontSize: '0.68rem',
                  fontWeight: 900,
                  color: '#F8A4D4',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                Training Resources
              </div>
              <h1
                style={{
                  color: 'white',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  marginBottom: '10px',
                }}
              >
                Presentations &amp; Demos
              </h1>
              <p
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  lineHeight: 1.65,
                  maxWidth: '480px',
                }}
              >
                All sales decks, platform demos, training documents, and school resources in one place.
                Click any card to open it in Google Drive.
              </p>
            </div>
            <div className="no-print" style={{ flexShrink: 0 }}>
              <HippoMascot mood="read" size={120} opacity={0.95} />
            </div>
          </div>

          {/* Search bar */}
          <div style={{ marginTop: '24px', maxWidth: '480px' }}>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources…"
              style={{
                width: '100%',
                padding: '11px 18px',
                borderRadius: '28px',
                border: '2px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: '0.88rem',
                fontWeight: 600,
                fontFamily: 'Nunito, sans-serif',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <div style={{ background: 'white', borderBottom: '1.5px solid #e5e7eb', position: 'sticky', top: '52px', zIndex: 100 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '12px 20px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Type tabs */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {ALL_TYPES.map(({ value, label, icon }) => (
              <button
                key={value}
                onClick={() => setTypeFilter(value as ResourceType | 'all')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 14px',
                  borderRadius: '20px',
                  border: `1.5px solid ${typeFilter === value ? '#E91E8C' : '#e5e7eb'}`,
                  background: typeFilter === value ? '#E91E8C' : 'white',
                  color: typeFilter === value ? 'white' : '#374151',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  fontFamily: 'Nunito, sans-serif',
                  transition: 'all 0.15s',
                }}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: '1.5px', height: '24px', background: '#e5e7eb', flexShrink: 0 }} />

          {/* Audience filter */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {ALL_AUDIENCES.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setAudienceFilter(value as ResourceAudience | 'all')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '20px',
                  border: `1.5px solid ${audienceFilter === value ? '#7B2D8B' : '#e5e7eb'}`,
                  background: audienceFilter === value ? '#7B2D8B' : 'white',
                  color: audienceFilter === value ? 'white' : '#6b7280',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  fontFamily: 'Nunito, sans-serif',
                  transition: 'all 0.15s',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <span style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', flexShrink: 0 }}>
            {filtered.length} resource{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Resource grid */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '28px 20px 80px' }}>
        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#9ca3af',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🔍</div>
            <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>No resources match your filters.</p>
            <button
              onClick={() => { setTypeFilter('all'); setAudienceFilter('all'); setSearch('') }}
              style={{
                marginTop: '12px',
                padding: '6px 18px',
                borderRadius: '20px',
                border: '1.5px solid #E91E8C',
                background: 'white',
                color: '#E91E8C',
                fontSize: '0.78rem',
                fontWeight: 800,
                cursor: 'pointer',
                fontFamily: 'Nunito, sans-serif',
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
              gap: '16px',
            }}
          >
            {filtered.map((resource) => {
              const meta = TYPE_META[resource.type]
              return (
                <a
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      background: 'white',
                      border: '2px solid #e5e7eb',
                      borderRadius: '16px',
                      padding: '22px 20px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxSizing: 'border-box',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = meta.color
                      el.style.transform = 'translateY(-3px)'
                      el.style.boxShadow = `0 8px 24px ${meta.color}22`
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = '#e5e7eb'
                      el.style.transform = 'translateY(0)'
                      el.style.boxShadow = 'none'
                    }}
                  >
                    {/* Type badge + icon */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          background: meta.bg,
                          color: meta.color,
                          borderRadius: '12px',
                          padding: '3px 10px',
                          fontSize: '0.7rem',
                          fontWeight: 900,
                        }}
                      >
                        <span>{meta.icon}</span>
                        <span>{meta.label}</span>
                      </span>
                      {resource.pinRequired && (
                        <span style={{ fontSize: '0.68rem', color: '#9ca3af', fontWeight: 700 }}>🔒 Restricted</span>
                      )}
                    </div>

                    {/* Title + description */}
                    <h3
                      style={{
                        fontWeight: 900,
                        fontSize: '0.95rem',
                        color: '#1A1A2E',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                      }}
                    >
                      {resource.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.79rem',
                        color: '#6b7280',
                        fontWeight: 600,
                        lineHeight: 1.6,
                        flex: 1,
                        marginBottom: '14px',
                      }}
                    >
                      {resource.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '14px' }}>
                      {resource.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            background: '#f3f4f6',
                            color: '#6b7280',
                            borderRadius: '10px',
                            padding: '2px 8px',
                            fontSize: '0.67rem',
                            fontWeight: 800,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1.5px solid #f3f4f6',
                        paddingTop: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                        {resource.audience.map((a) => {
                          const am = AUDIENCE_META[a]
                          return (
                            <span
                              key={a}
                              style={{
                                background: am.bg,
                                color: am.color,
                                borderRadius: '10px',
                                padding: '2px 8px',
                                fontSize: '0.67rem',
                                fontWeight: 800,
                              }}
                            >
                              {am.label}
                            </span>
                          )
                        })}
                      </div>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 900,
                          color: meta.color,
                          flexShrink: 0,
                          marginLeft: '8px',
                        }}
                      >
                        Open &rarr;
                      </span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        )}

        {/* How to add resources */}
        <div
          style={{
            marginTop: '40px',
            background: '#e3f2fd',
            border: '1.5px solid #42A5F5',
            borderRadius: '14px',
            padding: '18px 20px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>ℹ️</span>
          <div>
            <p style={{ fontWeight: 900, fontSize: '0.84rem', color: '#0d47a1', marginBottom: '4px' }}>
              Adding new resources
            </p>
            <p style={{ fontSize: '0.78rem', fontWeight: 600, color: '#1565C0', lineHeight: 1.6 }}>
              Share the file in Google Drive (&quot;Anyone with the link can view&quot;), then add an entry to{' '}
              <code style={{ background: '#bbdefb', borderRadius: '4px', padding: '1px 5px', fontSize: '0.75rem' }}>
                lib/resources-content.ts
              </code>{' '}
              with the share URL. No re-deploy needed for link updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
