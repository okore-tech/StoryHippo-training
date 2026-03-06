import type { Metadata } from 'next'
import './globals.css'
import TopNav from '@/components/nav/TopNav'

export const metadata: Metadata = {
  title: 'StoryHippo Training Hub',
  description:
    'Complete onboarding guide for the StoryHippo platform — for sales teams, educators, parents, and learners.',
  icons: {
    icon: '/hippo/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Nunito, sans-serif' }}>
        <TopNav />
        <main style={{ marginTop: '52px', minHeight: 'calc(100vh - 52px)' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
