import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/Button'

import { Card } from './'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Button>fdfdfdf</Button>,
  },
}
