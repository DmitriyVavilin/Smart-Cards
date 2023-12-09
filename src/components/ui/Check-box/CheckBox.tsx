import { ComponentPropsWithoutRef, ElementRef, ElementType, ReactNode, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import s from './CheckBox.module.scss'
type CheckBoxProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  className?: string
  disabled: boolean
  label: string
} & ComponentPropsWithoutRef<T>
export const CheckBox = forwardRef<
  ElementRef<typeof CheckboxRadix.Root>,
  CheckBoxProps<ElementType>
>((props: CheckBoxProps<ElementType>, ref) => {
  const { as: Component = 'button', children, className, disabled, label, ...rest } = props

  const classNames = {
    checkBoxClassName: clsx(s.button, s.className, disabled && s.disabled, className && className),
    checkboxContainer: clsx(s.checkboxContainer, className && s.className),
    checkboxLabelClassName: clsx(s.Label, disabled && s.disabled),
  }

  return (
    <div className={classNames['checkboxContainer']}>
      <CheckboxRadix.Root
        className={classNames['checkBoxClassName']}
        disabled={disabled}
        id={'c1'}
        ref={ref}
        {...rest}
      >
        <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
          <CheckIcon />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <label className={classNames['checkboxLabelClassName']} htmlFor={'c1'}>
        {label}
      </label>
    </div>
  )
})
