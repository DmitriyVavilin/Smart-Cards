import type { Meta, StoryObj } from '@storybook/react'

import { NewPasswordForm } from '@/components/auth/new-password/new-password'

const meta = {
  // argTypes: {
  //   onSubmit: { action: 'submitted' },
  // },
  component: NewPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/NewPasswordForm',
} satisfies Meta<typeof NewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
