import { ComponentPropsWithoutRef } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './dropDown.module.scss'

type Props = ComponentPropsWithoutRef<typeof DropdownMenuRadix.Item>

export const DropdownItem = ({ className, ...rest }: Props) => {
  return <DropdownMenuRadix.Item className={s.item} {...rest}></DropdownMenuRadix.Item>
}
