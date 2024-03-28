import { Table } from '@/components/ui/Table/Table'
import { Typography } from '@/components/ui/Typography'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks/decks.service'

export const Decks = () => {
  const { data, error, isError, isLoading } = useGetDecksQuery({})
  const [createdDeck, {}] = useCreateDeckMutation()

  const createDeck = () => {
    const formData = new FormData()

    formData.append('name', 'Dima')
    formData.append('cover', 'pictures')
    formData.append('isPrivate', 'true')
    console.log('formData', Object.fromEntries(formData))
    createdDeck(formData)
  }

  if (isError) {
    return <div>{JSON.stringify({ error })}</div>
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
      <button onClick={createDeck}>createDeck</button>
    </div>
  )
}

const fn = () => {}

const arr = ['asasa', 2121, fn]

console.log(arr)
