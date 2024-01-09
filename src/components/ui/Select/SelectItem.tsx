import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Item, ItemIndicator, ItemText } from '@radix-ui/react-select'

type Props = {
  className: string
  value: string
} & ComponentPropsWithoutRef<typeof Item>

export const SelectItem = forwardRef<ElementRef<typeof Item>, Props>((props: Props, ref) => {
  const { children, className, ...rest } = props

  return (
    <Item {...rest} {...props} ref={ref}>
      <ItemText>{children}</ItemText>
      <ItemIndicator className={'SelectItemIndicator'}></ItemIndicator>
    </Item>
  )
})
