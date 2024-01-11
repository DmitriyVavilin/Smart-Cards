import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { SelectItem } from '@/components/ui/Select/SelectItem'
import { Typography } from '@/components/ui/Typography'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'

import s from './Select.module.scss'

type Options = {
  disabled?: boolean
  value: string
}

type Props = {
  className?: string
  defaultValue: string
  disabled?: boolean
  label?: string
  placeholder?: string
  selectOptions: Options[]
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
      placeholder,
      required,
      selectOptions,
      value,
      ...rest
    } = props

    return (
      <SelectRadix.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        open={open}
        required
        value={value}
        {...rest}
      >
        {label && (
          <Typography as={'h1'} className={s.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <SelectRadix.Trigger className={s.trigger} ref={ref}>
          <SelectRadix.Value defaultValue={value} placeholder={placeholder} />
          <SelectRadix.Icon asChild></SelectRadix.Icon>
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
                  {selectOptions.map(el => (
                    <SelectItem disabled={el.disabled} key={el.value} value={el.value}>
                      {el.value}
                    </SelectItem>
                  ))}
                </SelectRadix.Label>
              </SelectRadix.Group>
            </SelectRadix.Viewport>
            <SelectRadix.ScrollDownButton className={s.SelectScrollButton}>
              <ChevronDownIcon />
            </SelectRadix.ScrollDownButton>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    )
  }
)
