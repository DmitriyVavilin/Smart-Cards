import { Table } from '@/components/ui/Table/Table'
import { Typography } from '@/components/ui/Typography'
import {
  useCreateDeckMutation,
  useGetDecksByIdQuery,
  useGetDecksQuery,
} from '@/services/decks.service'

export const Decks = () => {
  const { data, error, isLoading, refetch } = useGetDecksQuery({ currentPage: 2, itemsPerPage: 3 })
  const { data: deckByIdData } = useGetDecksByIdQuery({ id: 'cltob3pyr0646v72g9bvra7kd' })
  const [createDecks, { isLoading: isDeckBeingCreated }] = useCreateDeckMutation()

  console.log('deckByIdData: ', deckByIdData)
  if (error) {
    return (
      <>
        <Typography style={{ color: '#fff' }} variant={'h1'}>
          ...An error has occurred
        </Typography>
        <Typography style={{ color: '#fff' }} variant={'h1'}>
          {/*{JSON.stringify(error.data?.message)}*/}
        </Typography>
      </>
    )
  }

  if (isLoading) {
    return (
      <Typography style={{ color: '#fff' }} variant={'h1'}>
        ...Loading
      </Typography>
    )
  }

  return (
    <div>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Cards</Table.HeadCell>
            <Table.HeadCell>Updated</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data?.items?.map(deck => {
            return (
              <Table.Row key={deck?.id}>
                <Table.Cell>{deck?.name}</Table.Cell>
                <Table.Cell>{deck?.cardsCount}</Table.Cell>
                <Table.Cell>{new Date(deck.updated).toLocaleDateString()}</Table.Cell>
                <Table.Cell>{deck?.author.name}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
