import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './RadioGroupItem.module.scss'

export type RadioGroupItemProps = {
  label: string
  value?: string
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Item>

export const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupRadix.Item>,
  RadioGroupItemProps
>(({ disabled, label, value, ...rest }, ref) => {
  return (
    <div className={s.container}>
      <RadioGroupRadix.Item
        className={s.item}
        disabled={disabled}
        ref={ref}
        value={value}
        {...rest}
      >
        <RadioGroupRadix.Indicator className={s.indicator} />
      </RadioGroupRadix.Item>
      <Typography as={'label'} className={s.label} variant={'body1'}>
        {label}
      </Typography>
    </div>
  )
})
