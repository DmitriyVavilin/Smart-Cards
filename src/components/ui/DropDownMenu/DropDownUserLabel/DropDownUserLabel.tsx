import Avatar from '@/assets/Avatar'
import { Logout } from '@/assets/Logout'
import Profile from '@/assets/Profile'
import { DropdownItem } from '@/components/ui/DropDownMenu/DropdownItem'
import { DropdownMenu } from '@/components/ui/DropDownMenu/DropdownMenu'
import { DropdownSeparator } from '@/components/ui/DropDownMenu/DropdownSeparator'

import s from './dropDownUserLabel.module.scss'

export const DropDownUserLabel = () => {
  return (
    <DropdownMenu
      trigger={
        <button className={s.button}>
          <Avatar />
        </button>
      }
    >
      <DropdownItem>
        <Avatar />
        dv.vavilin@mail.ru
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <Profile />
        My Profile
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <Logout />
        Sign Out
      </DropdownItem>
      <DropdownSeparator />
    </DropdownMenu>
  )
}
