'use client'
import { trackWaitlistClick } from '@/lib/analytics'

const WAITLIST_URL = 'https://accounts.kodalaunch.com/waitlist#/?redirect_url=https%3A%2F%2Fkodalaunch.com'

interface Props {
  page: string
  location: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export function WaitlistButton({ page, location, className, style, children }: Props) {
  return (
    <a
      href={WAITLIST_URL}
      onClick={() => trackWaitlistClick(page, location)}
      className={className}
      style={style}
    >
      {children ?? 'Join the waitlist'}
    </a>
  )
}
