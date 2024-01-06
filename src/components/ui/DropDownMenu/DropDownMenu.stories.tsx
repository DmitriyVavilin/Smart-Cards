import Avatar from '@/assets/Avatar'
import { DropdownItem } from '@/components/ui/DropDownMenu/DropdownItem'
import { DropdownMenu } from '@/components/ui/DropDownMenu/DropdownMenu'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

// @ts-ignore
export const DropDown: Story = {
  args: {
    children: (
      <>
        <DropdownMenu>
          <Avatar />
          <DropdownItem>Login</DropdownItem>
        </DropdownMenu>
      </>
    ),
  },
}
