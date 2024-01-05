import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDown.module.scss'

type Props = {
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>
export const DropDownMenu = (props: Props) => {
  const { children, trigger, ...rest } = props

  return (
    <DropdownMenu.Root {...rest}>
      <DropdownMenu.Trigger>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.content} sideOffset={5}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
