import { Input } from '@/components/ui/input/Input'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const InputDefault: Story = {
  args: {
    placeholder: 'Input',
    type: 'text',
  },
}

export const InputSearch: Story = {
  args: {
    placeholder: 'Input',
    type: 'search',
  },
}

export const InputPassword: Story = {
  args: {
    placeholder: 'Input',
    type: 'password',
  },
}

export const InputError: Story = {
  args: {
    error: 'Error!',
    placeholder: 'Input',
    type: 'text',
  },
}

export const InputDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
    type: 'text',
  },
}

export const InputActive: Story = {
  args: {
    placeholder: 'Input',
    theme: 'active',
    type: 'text',
  },
}

export const InputHover: Story = {
  args: {
    placeholder: 'Input',
    theme: 'hover',
    type: 'text',
  },
}

export const InputFocus: Story = {
  args: {
    placeholder: 'Input',
    theme: 'focus',
    type: 'text',
  },
}
