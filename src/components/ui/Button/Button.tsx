import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { Logout } from '@/assets/log-out/Logout'
import { clsx } from 'clsx'

import s from './Button.module.scss'

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref']

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode | string
  className?: string
  fullWidth?: boolean
  icon: string | undefined
  variant: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref?: Ref<PolymorphicRef<T>>) => {
    const {
      as: Component = 'button',
      children,
      className,
      fullWidth,
      icon,
      variant = 'primary',
      ...rest
    } = props

    const btnClassName = clsx(s.button, s[variant], className, fullWidth && s.fullWidth)

    return (
      <Component className={btnClassName} {...rest} ref={ref}>
        {icon && <Logout className={s.icon} />}
        {children}
      </Component>
    )
  }
)
