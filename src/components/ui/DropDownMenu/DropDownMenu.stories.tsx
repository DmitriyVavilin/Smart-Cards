import Avatar from '@/assets/Avatar'
import ExpandMenu from '@/assets/ExpandMenu'
import { Logout } from '@/assets/Logout'
import Profile from '@/assets/Profile'
import { DeleteIcon } from '@/assets/deleteIcon'
import { EditIcon } from '@/assets/editIcon'
import { PlayIcon } from '@/assets/playIcon'
import { DropDownUserLabel } from '@/components/ui/DropDownMenu/DropDownUserLabel/DropDownUserLabel'
import { DropdownItem } from '@/components/ui/DropDownMenu/DropdownItem'
import { DropdownMenu } from '@/components/ui/DropDownMenu/DropdownMenu'
import { DropdownSeparator } from '@/components/ui/DropDownMenu/DropdownSeparator'
import { Typography } from '@/components/ui/Typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownWithAvatar: Story = {
  args: {},
  render: () => (
    <div style={{ marginLeft: '100px' }}>
      <DropdownMenu align={'start'} trigger={<Avatar />}>
        <DropDownUserLabel email={'dv.vavilin@mail.ru'} icon={<Avatar />} name={'Dmitriy'} />
        <DropdownSeparator />
        <DropdownItem>
          <Profile />
          <Typography style={{ color: '#fff' }} variant={'caption'}>
            <a href={'https://www.youtube.com/'}>My Profile</a>
          </Typography>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <Logout />
          <Typography style={{ color: '#fff' }} variant={'caption'}>
            Sign Out
          </Typography>
        </DropdownItem>
      </DropdownMenu>
    </div>
  ),
}

export const DropDownWithIcon: Story = {
  args: {},
  render: () => (
    <div style={{ marginLeft: '100px' }}>
      <DropdownMenu align={'end'} trigger={<ExpandMenu />}>
        <DropdownItem>
          <a href={'https://www.youtube.com/'}>
            <PlayIcon />
          </a>
          <Typography style={{ color: '#fff' }} variant={'caption'}>
            <a href={'https://www.youtube.com/'} style={{ textDecoration: 'none' }}>
              Learn
            </a>
          </Typography>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <a href={'https://www.youtube.com/'}>
            <EditIcon />
          </a>
          <Typography style={{ color: '#fff' }} variant={'caption'}>
            <a href={'https://www.youtube.com/'} style={{ textDecoration: 'none' }}>
              Edit
            </a>
          </Typography>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <a href={'https://www.youtube.com/'}>
            <DeleteIcon />
          </a>
          <Typography style={{ color: '#fff' }} variant={'caption'}>
            <a href={'https://www.youtube.com/'} style={{ textDecoration: 'none' }}>
              Delete
            </a>
          </Typography>
        </DropdownItem>
      </DropdownMenu>
    </div>
  ),
}
