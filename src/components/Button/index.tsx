// @ts-ignore
import { ReactNode, ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

// @ts-ignore
type ButtonProps = { children: ReactNode; } & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button (props: ButtonProps) {
  return <Container type="button" {...props} />
}
