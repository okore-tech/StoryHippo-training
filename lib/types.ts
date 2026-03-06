export type VerificationStatus = 'verified' | 'unverified' | 'coming-soon'

export interface TrainingStep {
  id: number | string
  emoji: string
  title: string
  body: string
  tip?: string
  warning?: string
  screenshotLabel?: string
  verification: VerificationStatus
  verificationNote?: string
}

export interface TrainingModule {
  id: string
  number: number
  title: string
  subtitle: string
  steps: TrainingStep[]
  accentColor?: string
}

export interface RoleConfig {
  id: string
  label: string
  emoji: string
  color: string
  gradient: string
  description: string
  href: string
  estimatedTime: string
  moduleCount: number
}

export type HippoMood = 'wave' | 'read' | 'think' | 'cheer' | 'sunglasses'

export interface ConversionSignal {
  icon: string
  title: string
  description: string
  borderColor: string
  titleColor: string
}
