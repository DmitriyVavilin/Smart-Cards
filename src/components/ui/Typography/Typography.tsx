import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Typography.module.scss'

type TypographyProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?:
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

export const Typography = <T extends ElementType = 'span'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', children, className, variant, ...rest } = props

  const typographyClass = {
    root: clsx(s[variant as keyof typeof s], className),
  }

  return (
    <Component className={typographyClass.root} {...rest}>
      {children}
    </Component>
  )
}
