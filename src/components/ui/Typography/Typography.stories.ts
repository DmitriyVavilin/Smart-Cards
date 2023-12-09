import { Typography } from '@/components/ui/Typography/Typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    title: { control: { type: 'text' } },
    variant: {
      control: { type: 'radio' },
      options: [
        'body1',
        'body2',
        'caption',
        'h1',
        'h2',
        'h3',
        'large',
        'link1',
        'link2',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Body1: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'body1',
  },
}

export const Body2: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'body2',
  },
}

export const Caption: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'caption',
  },
}

export const H1: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h3',
  },
}

export const Large: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'large',
  },
}

export const Link1: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'link2',
  },
}

export const Overline: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'overline',
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'subtitle1',
  },
}

export const Subtitle2: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'subtitle2',
  },
}
