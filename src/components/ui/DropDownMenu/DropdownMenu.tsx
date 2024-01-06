import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './dropDown.module.scss'

type Props = {
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>
export const DropdownMenu = (props: Props) => {
  const { children, trigger, ...rest } = props

  return (
    <DropdownMenuRadix.Root {...rest}>
      <DropdownMenuRadix.Trigger className={s.trigger}>{trigger}</DropdownMenuRadix.Trigger>
      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content className={s.content} sideOffset={5}>
          {children}
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
