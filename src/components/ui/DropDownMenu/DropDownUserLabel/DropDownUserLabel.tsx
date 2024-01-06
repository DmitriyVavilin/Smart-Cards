import Avatar from '@/assets/Avatar'
import { Logout } from '@/assets/Logout'
import Profile from '@/assets/Profile'
import { DropDownItem } from '@/components/ui/DropDownMenu/DropDownItem'
import { DropDownMenu } from '@/components/ui/DropDownMenu/DropDownMenu'
import { DropDownSeparator } from '@/components/ui/DropDownMenu/DropDownSeparator'

import s from './dropDownUserLabel.module.scss'

export const DropDownUserLabel = () => {
  return (
    <DropDownMenu
      trigger={
        <button className={s.button}>
          <Avatar />
        </button>
      }
    >
      <DropDownItem>
        <Avatar />
        dv.vavilin@mail.ru
      </DropDownItem>
      <DropDownSeparator />
      <DropDownItem>
        <Profile />
        My Profile
      </DropDownItem>
      <DropDownSeparator />
      <DropDownItem>
        <Logout />
        Sign Out
      </DropDownItem>
      <DropDownSeparator />
    </DropDownMenu>
  )
}
