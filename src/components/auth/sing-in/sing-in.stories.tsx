import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/components/auth/sing-in/sing-in'

const meta = {
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
