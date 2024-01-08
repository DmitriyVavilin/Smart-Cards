import { DropDownUserLabel } from '@/components/ui/DropDownMenu/DropDownUserLabel/DropDownUserLabel'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: DropDownUserLabel,
  tags: ['autodocs'],
  title: 'Components/DropDownUserLabel',
} satisfies Meta<typeof DropDownUserLabel>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownDefault: Story = {
  args: {},
}
