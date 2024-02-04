import { Select } from '@/components/ui/Select/Select'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>
const options = [{ value: 'Select-box 1' }, { value: 'Select-box 2' }, { value: 'Select-box 3' }]

export const SelectDefault: Story = {
  args: {
    defaultValue: 'Select-box 1',
    label: 'Select-box',
    options: options,
  },
}
export const SelectDisabled: Story = {
  args: {
    defaultValue: 'Select-box 1',
    disabled: true,
    label: 'Select-box',
    options: options,
  },
}
