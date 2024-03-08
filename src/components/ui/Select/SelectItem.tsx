import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import { Item, ItemIndicator, ItemText } from '@radix-ui/react-select'

import s from './Select.module.scss'

type Props = { value: string } & ComponentPropsWithoutRef<typeof Item>

export const SelectItem = forwardRef<ElementRef<typeof Item>, Props>((props: Props, ref) => {
  const { children, className, disabled, value, ...rest } = props

  return (
    <Item className={s.item} {...rest} {...props} ref={ref}>
      <ItemText>
        <Typography className={s.textItem} variant={'body1'}>
          {children}
        </Typography>
      </ItemText>
      <ItemIndicator></ItemIndicator>
    </Item>
  )
})
