'use client'
import { trackSignUpClick } from '@/lib/analytics'

const SIGNUP_URL = 'https://accounts.kodalaunch.com/sign-up'

interface Props {
  page: string
  location: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export function SignUpButton({ page, location, className, style, children }: Props) {
  return (
    <a
      href={SIGNUP_URL}
      onClick={() => trackSignUpClick(page, location)}
      className={className}
      style={style}
    >
      {children ?? 'Sign up'}
    </a>
  )
}
