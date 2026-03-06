'use client'

interface PrintButtonProps {
  label?: string
}

export default function PrintButton({ label = 'Print / Save as PDF' }: PrintButtonProps) {
  return (
    <button
      onClick={() => window.print()}
      className="no-print"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        background: '#E91E8C',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        padding: '12px 22px',
        fontFamily: 'Nunito, sans-serif',
        fontWeight: 800,
        fontSize: '0.85rem',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(233,30,140,.35)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        zIndex: 100,
        transition: 'background .15s',
      }}
      onMouseEnter={(e) => ((e.target as HTMLElement).style.background = '#C01070')}
      onMouseLeave={(e) => ((e.target as HTMLElement).style.background = '#E91E8C')}
    >
      🖨️ {label}
    </button>
  )
}
