import Avatar from '@/assets/Avatar'
import { Logout } from '@/assets/Logout'
import Profile from '@/assets/Profile'
import { DropdownItem } from '@/components/ui/DropDownMenu/DropdownItem'
import { DropdownMenu } from '@/components/ui/DropDownMenu/DropdownMenu'
import { DropdownSeparator } from '@/components/ui/DropDownMenu/DropdownSeparator'
import { Typography } from '@/components/ui/Typography'

import s from './dropDownUserLabel.module.scss'

export type Props = {
  email?: string
  name?: string
}
export const DropDownUserLabel = ({ email, name }: Props) => {
  return (
    <div className={s.container}>
      <DropdownMenu
        align={'end'}
        trigger={
          <div className={s.icon}>
            <Avatar />
          </div>
        }
      >
        <div>
          <Avatar />
          <Typography style={{ color: '#fff' }} variant={'caption'}>
            dv.vavilin@mail.ru
          </Typography>
        </div>
        <DropdownSeparator />
        <DropdownItem>
          <Profile />
          <Typography style={{ color: '#fff' }} variant={'caption'}>
            dv.vavilin@mail.ru
          </Typography>
          <a href={'https://www.youtube.com/'}>{name}</a>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <Logout />
          {email}
          <Typography style={{ color: '#fff' }} variant={'caption'}>
            Sing Out
          </Typography>
        </DropdownItem>
      </DropdownMenu>
    </div>
  )
}
