import type { Meta, StoryObj } from '@storybook/react'

import { CreatePassword } from '@/components/auth/new-password/create-password'

const meta = {
  // argTypes: {
  //   onSubmit: { action: 'submitted' },
  // },
  component: CreatePassword,
  tags: ['autodocs'],
  title: 'Auth/NewPasswordForm',
} satisfies Meta<typeof CreatePassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
