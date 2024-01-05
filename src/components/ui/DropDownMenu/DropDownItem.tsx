import { ComponentPropsWithoutRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDown.module.scss'

type Props = ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const DropDownItem = ({ className, ...rest }: Props) => {
  return <DropdownMenu.Item className={s.item} {...rest}></DropdownMenu.Item>
}
