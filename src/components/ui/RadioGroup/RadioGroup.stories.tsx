import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { label: 'Dima', value: '1' },
  { label: 'Dayna', value: '2' },
  { label: 'igor', value: '3' },
]

export const RadioGroupDefault: Story = {
  args: { defaultValue: options[0].value, options: options },
}
