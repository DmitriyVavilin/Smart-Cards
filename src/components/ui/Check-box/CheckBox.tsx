import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Root } from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import s from './CheckBox.module.scss'

export type CheckBoxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  onCheckedChange?: (checked: boolean) => void
  required?: boolean
} & ComponentPropsWithoutRef<typeof Root>
export const CheckBox = forwardRef<ElementRef<typeof Root>, CheckBoxProps>(
  (props: CheckBoxProps, ref) => {
    const { checked, className, disabled, label, onCheckedChange, required, ...rest } = props

    const classNames = {
      checkBoxRoot: clsx(s.button, s.className, disabled && s.disad, className && className),
      checkboxContainer: clsx(s.checkboxContainer, className && s.cblelassName),
      label: clsx(s.Label, disabled && s.disabled),
    }

    return (
      <div className={s.container}>
        <Typography as={'label'} className={classNames.label} variant={'body2'}>
          <div className={classNames.checkboxContainer}>
            <CheckboxRadix.Root
              checked={checked}
              className={classNames.checkBoxRoot}
              disabled={disabled}
              onCheckedChange={onCheckedChange}
              ref={ref}
              required={required}
              {...rest}
            >
              <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
                <CheckIcon />
              </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
            {label}
          </div>
        </Typography>
      </div>
    )
  }
)
