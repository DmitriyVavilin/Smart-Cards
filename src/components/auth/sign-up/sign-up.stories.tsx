import type { Meta, StoryObj } from '@storybook/react'

import SignUpForm from '@/components/auth/sign-up/sign-up'

const meta = {
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/SignUpForm',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
