import type { Meta, StoryObj } from '@storybook/react'

import { PackTable } from '@/components/layout/main/tables/pack-table/pack-table'

const meta = {
  component: PackTable,
  tags: ['autodocs'],
  title: 'Common/Tables/PackTable',
} satisfies Meta<typeof PackTable>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  {
    answer: 'Project A',
    grade: 10,
    question: 'John Doe',
    updated: '2023-07-07',
  },
  {
    answer: 'Project B',
    grade: 5,
    question: 'Jane Smith',
    updated: '2023-07-06',
  },
  {
    answer: 'Project C',
    grade: 8,
    question: 'Alice Johnson',
    updated: '2023-07-05',
  },
  {
    answer: 'Project D',
    grade: 3,
    question: 'Bob Anderson',
    updated: '2023-07-07',
  },
  {
    answer: 'Project E',
    grade: 12,
    question: 'Emma Davis',
    updated: '2023-07-04',
  },
]

export const TableOfPack: Story = {
  args: { data },
}
