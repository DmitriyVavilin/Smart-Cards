import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import ArrowDown from '@/assets/ArrowDown'
import { SelectItem } from '@/components/ui/Select/SelectItem'
import { Typography } from '@/components/ui/Typography'
import * as SelectRadix from '@radix-ui/react-select'

import s from './Select.module.scss'

type Options = {
  disabled?: boolean
  value: string
}

type Props = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  label?: string
  options: Options[]
  placeholder?: string
  value?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>
export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, Props>(
  (props: Props, ref) => {
    const {
      children,
      defaultValue,
      disabled,
      label,
      onOpenChange,
      onValueChange,
      open,
      options,
      placeholder,
      required,
      value,
      ...rest
    } = props

    return (
      <SelectRadix.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        required
        value={value}
        {...rest}
      >
        {label && (
          <Typography
            as={'h1'}
            className={`${s.label} ${disabled && s.labelDisabled}`}
            variant={'body2'}
          >
            {label}
          </Typography>
        )}
        <SelectRadix.Trigger className={s.trigger} ref={ref}>
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon asChild>
            <ArrowDown className={s.icon} />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content
            alignOffset={0}
            className={s.content}
            position={'popper'}
            ref={ref}
            sideOffset={0}
          >
            <SelectRadix.Viewport className={s.viewport}>
              <SelectRadix.Group>
                <SelectRadix.Label aria-label={label}>
                  {options.map(el => (
                    <SelectItem disabled={el.disabled} key={el.value} value={el.value}>
                      {el.value}
                    </SelectItem>
                  ))}
                </SelectRadix.Label>
              </SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    )
  }
)
