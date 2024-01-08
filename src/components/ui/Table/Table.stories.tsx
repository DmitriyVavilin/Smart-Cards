import type { Meta, StoryObj } from '@storybook/react'

import { AscIcon } from '@/assets/ascIcon'
import { DeleteIcon } from '@/assets/deleteIcon'
import { DescIcon } from '@/assets/descIcon'
import { EditIcon } from '@/assets/editIcon'
import { PlayIcon } from '@/assets/playIcon'
import { useSort } from '@/common/utils/useSort'
import { Table } from '@/components/ui/Table/Table'
import { Typography } from '@/components/ui/Typography'

import s from './Table.module.scss'

const meta = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  {
    cardsCount: 10,
    createdBy: 'John Doe',
    title: 'Project A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 5,
    createdBy: 'Jane Smith',
    title: 'Project B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Alice Johnson',
    title: 'Project C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 3,
    createdBy: 'Bob Anderson',
    title: 'Project D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 12,
    createdBy: 'Emma Davis',
    title: 'Project E',
    updated: '2023-07-04',
  },
]

const TableWithSort = () => {
  const { handleSort, sort } = useSort()

  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>
            <Typography style={{ color: '#fff' }} variant={'subtitle2'}>
              Name
            </Typography>
          </Table.HeadCell>
          <Table.HeadCell>
            <Typography style={{ color: '#fff' }} variant={'subtitle2'}>
              Cards
            </Typography>
          </Table.HeadCell>
          <Table.HeadCell className={s.sortedCell} onClick={() => handleSort('updated')}>
            <Typography style={{ color: '#fff' }} variant={'subtitle2'}>
              Last Updated
            </Typography>
            {sort && sort.key === 'updated' && (
              <span style={{ alignItems: 'center', display: 'flex' }}>
                {sort.direction === 'asc' ? <AscIcon /> : <DescIcon />}
              </span>
            )}
          </Table.HeadCell>
          <Table.HeadCell>
            <Typography style={{ color: '#fff' }} variant={'subtitle2'}>
              Created by
            </Typography>
          </Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map(item => (
          <Table.Row key={item.title}>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>{item.cardsCount}</Table.Cell>
            <Table.Cell>{item.updated}</Table.Cell>
            <Table.Cell>{item.createdBy}</Table.Cell>
            <Table.Cell className={s.serviceCell}>
              <PlayIcon />
              <EditIcon />
              <DeleteIcon />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

export const WithSort: Story = {
  render: () => <TableWithSort />,
}

export const SimpleTable: Story = {
  render: () => <BasicTable />,
}

const BasicTable = () => {
  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>title 1</Table.HeadCell>
          <Table.HeadCell>title 2</Table.HeadCell>
          <Table.HeadCell>title 3</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>value 1</Table.Cell>
          <Table.Cell>value 2</Table.Cell>
          <Table.Cell>value 3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>value 11</Table.Cell>
          <Table.Cell>value 22</Table.Cell>
          <Table.Cell>value 32</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>value 13</Table.Cell>
          <Table.Cell>value 23</Table.Cell>
          <Table.Cell>value 34</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>value 1</Table.Cell>
          <Table.Cell>value 23</Table.Cell>
          <Table.Cell>value 3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>value 1</Table.Cell>
          <Table.Cell>value 23</Table.Cell>
          <Table.Cell>value 35</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}
