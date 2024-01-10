import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Item, ItemIndicator, ItemText } from '@radix-ui/react-select'

type Props = {
  className?: string
} & ComponentPropsWithoutRef<typeof Item>

export const SelectItem = forwardRef<ElementRef<typeof Item>, Props>((props: Props, ref) => {
  const { children, className, value, ...rest } = props

  return (
    <Item {...rest} {...props} ref={ref}>
      <ItemText>{value}</ItemText>
      <ItemIndicator className={className}></ItemIndicator>
    </Item>
  )
})
