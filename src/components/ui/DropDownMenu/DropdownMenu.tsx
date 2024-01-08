import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './dropDown.module.scss'

type Props = {
  align?: 'center' | 'end' | 'start'
  trigger?: ReactNode | string
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>
export const DropdownMenu = (props: Props) => {
  const { align = 'end', children, trigger, ...rest } = props

  return (
    <DropdownMenuRadix.Root {...rest}>
      <DropdownMenuRadix.Trigger asChild>
        {<button className={s.buttonTrigger}>{trigger}</button>}
      </DropdownMenuRadix.Trigger>
      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content
          align={align}
          alignOffset={-160}
          className={s.dropdownMenuContent}
          sideOffset={3}
        >
          {children}
          <DropdownMenuRadix.Arrow asChild className={s.arrowWrapper}>
            <div className={s.arrow} />
          </DropdownMenuRadix.Arrow>
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
