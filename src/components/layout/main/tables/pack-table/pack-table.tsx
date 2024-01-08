import { AscIcon } from '@/assets/ascIcon'
import { DeleteIcon } from '@/assets/deleteIcon'
import { DescIcon } from '@/assets/descIcon'
import { EditIcon } from '@/assets/editIcon'
import { useSort } from '@/common/utils/useSort'
import { Table } from '@/components/ui/Table/Table'
import { Typography } from '@/components/ui/Typography/Typography'

import s from '@/components/ui/table/table.module.scss'

type Props = {
  data: Array<Card>
}

type Card = {
  answer: string
  grade: number
  question: string
  updated: string
}
export const PackTable = ({ data }: Props) => {
  const { handleSort, sort } = useSort()

  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>
            <Typography style={{ color: '#fff' }} variant={'subtitle2'}>
              Question
            </Typography>
          </Table.HeadCell>
          <Table.HeadCell>
            <Typography style={{ color: '#fff' }} variant={'subtitle2'}>
              Answer
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
              Grade
            </Typography>
          </Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map(item => (
          <Table.Row key={item.question}>
            <Table.Cell>{item.question}</Table.Cell>
            <Table.Cell>{item.answer}</Table.Cell>
            <Table.Cell>{item.updated}</Table.Cell>
            <Table.Cell>{item.grade}</Table.Cell>
            <Table.Cell className={s.serviceCell}>
              <EditIcon />
              <DeleteIcon />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
