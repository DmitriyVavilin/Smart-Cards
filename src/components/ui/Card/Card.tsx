import { ComponentProps, ElementRef, ElementType, Ref, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Card.module.scss'

type CardProps<T extends ElementType> = {
  as?: T
} & ComponentProps<T>

export const Card = forwardRef(
  <T extends ElementType>(props: CardProps<T>, ref?: Ref<ElementRef<'div'>>) => {
    const { as: Component = 'div', className, ...rest } = props

    const classNames = clsx(s.card, className)

    return <Component className={classNames} ref={ref} {...rest}></Component>
  }
)
