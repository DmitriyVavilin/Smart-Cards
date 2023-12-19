import { ComponentPropsWithoutRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

type Props = ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const DropDownItem = ({ className, ...rest }: Props) => {
  return <DropdownMenu.Item className={className} {...rest}></DropdownMenu.Item>
}
