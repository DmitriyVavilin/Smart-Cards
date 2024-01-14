import type { Meta, StoryObj } from '@storybook/react'

import ForgotPasswordForm from '@/components/auth/forgot-form/forgot-password-form.tsx'

const meta = {
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/ForgotForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
