import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  forwardRef,
} from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonVariants = 'link' | 'primary' | 'secondary' | 'tertiary'

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref']

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: ButtonVariants
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: PolymorphicRef<T>) => {
    const {
      as: Component = 'button',
      children,
      className,
      fullWidth,
      variant = 'primary',
      ...rest
    } = props
    const buttonClass = clsx(s.button, s[variant], className, fullWidth && s.fullWidth)

    return (
      <Component className={buttonClass} ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)
