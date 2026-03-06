interface TipBoxProps {
  children: React.ReactNode
  variant?: 'tip' | 'warning' | 'info' | 'verified' | 'unverified'
}

const VARIANTS = {
  tip: {
    bg: '#fff8e1',
    border: '#FFD54F',
    text: '#5a4000',
    icon: '💡',
  },
  warning: {
    bg: '#fff3e0',
    border: '#FF9800',
    text: '#7a3800',
    icon: '⚠️',
  },
  info: {
    bg: '#e3f2fd',
    border: '#42A5F5',
    text: '#0d47a1',
    icon: 'ℹ️',
  },
  verified: {
    bg: '#e8f5e9',
    border: '#4CAF50',
    text: '#1b5e20',
    icon: '✅',
  },
  unverified: {
    bg: '#fff3cd',
    border: '#ffc107',
    text: '#856404',
    icon: '⚠️',
  },
}

export default function TipBox({ children, variant = 'tip' }: TipBoxProps) {
  const v = VARIANTS[variant]
  return (
    <div
      style={{
        background: v.bg,
        borderLeft: `4px solid ${v.border}`,
        borderRadius: '0 10px 10px 0',
        padding: '10px 14px',
        marginTop: '12px',
        fontSize: '0.8rem',
        fontWeight: 700,
        color: v.text,
        display: 'flex',
        gap: '8px',
        alignItems: 'flex-start',
        lineHeight: 1.5,
      }}
    >
      <span style={{ flexShrink: 0 }}>{v.icon}</span>
      <span>{children}</span>
    </div>
  )
}
