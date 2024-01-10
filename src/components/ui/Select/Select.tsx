import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

type Props = {
  className?: string
  disabled?: boolean
  label?: string
  placeholder?: string
  value?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>
export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, Props>(
  (props: Props, ref) => {
    const {
      children,
      disabled,
      label,
      onOpenChange,
      onValueChange,
      open,
      placeholder,
      value,
      ...rest
    } = props

    return (
      <SelectRadix.Root
        disabled={disabled}
        onValueChange={onValueChange}
        open={open}
        value={value}
        {...rest}
      >
        <SelectRadix.Trigger ref={ref}>
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon></SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content ref={ref}>
            <SelectRadix.Viewport>
              <SelectRadix.Group>
                <SelectRadix.Label aria-label={label}>{children}</SelectRadix.Label>
              </SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    )
  }
)
