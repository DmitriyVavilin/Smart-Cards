import Avatar from '@/assets/Avatar'
import Profile from '@/assets/Profile'
import { DropDownItem } from '@/components/ui/DropDownMenu/DropDownItem'
import { DropDownMenu } from '@/components/ui/DropDownMenu/DropDownMenu'
import { DropDownSeparator } from '@/components/ui/DropDownMenu/DropDownSeparator'

export function App() {
  return (
    <div>
      <DropDownMenu trigger={<Avatar />}>
        <DropDownItem>
          <Profile />
          My Profile
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem>22222222222222222</DropDownItem>
        <DropDownSeparator />
        <DropDownItem>33333333333333333333</DropDownItem>
      </DropDownMenu>
    </div>
  )
}
