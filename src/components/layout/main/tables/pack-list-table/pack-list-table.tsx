import { AscIcon } from '@/assets/ascIcon'
import { DeleteIcon } from '@/assets/deleteIcon'
import { DescIcon } from '@/assets/descIcon'
import { EditIcon } from '@/assets/editIcon'
import { PlayIcon } from '@/assets/playIcon'
import { useSort } from '@/common/utils/useSort'
import { Table } from '@/components/ui/Table/Table'
import { Typography } from '@/components/ui/Typography'

import s from '@/components/ui/table/table.module.scss'

type Props = {
  data: Array<Card>
}

type Card = {
  cardsCount: number
  createdBy: string
  title: string
  updated: string
}
export const PackListTable = ({ data }: Props) => {
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
