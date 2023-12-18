import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Typography.module.scss'

type TypographyProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  className?: string
  variant:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'h1'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { as: Component = 'h1', children, className, variant, ...rest } = props

  const classNames = {
    root: clsx(s[variant], className),
  }

  return <Component className={classNames.root} {...rest} />
}
