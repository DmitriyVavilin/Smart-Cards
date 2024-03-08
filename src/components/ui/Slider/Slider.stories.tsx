import { Slider } from '@/components/ui/Slider/Slider'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderDefault: Story = {
  args: { onChange: () => {}, value: [1, 10] },
}
