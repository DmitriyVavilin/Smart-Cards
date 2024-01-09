import type { Meta, StoryObj } from '@storybook/react'

import userLogoMain from '@/assets/userLogoMain.png'
import { PersonalInfo } from '@/components/layout/main/personal-info-editor/personal-info'

const meta = {
  component: PersonalInfo,
  tags: ['autodocs'],
  title: 'Common/PersonalInfo',
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: () => {
      console.log('logOut')
    },
    userName: 'Ivanec',
    userPhoto: userLogoMain,
  },
}
