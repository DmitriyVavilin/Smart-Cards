import { ComponentProps, ReactNode, forwardRef } from 'react'

import s from './Card.module.scss'

type CardProps = {
  children: ReactNode
  className?: string
} & ComponentProps<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <div className={`${s.card} ${className ?? ''}`} ref={ref} {...rest}>
      {children}
    </div>
  )
})
