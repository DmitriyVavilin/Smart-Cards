import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from '@/components/ui/Check-box/CheckBox'

const meta = {
  argTypes: {
    title: { control: { type: 'text' } },
  },
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'buttonClassName',
    label: 'Default',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked',
  },
}

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Unchecked',
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled',
  },
}
