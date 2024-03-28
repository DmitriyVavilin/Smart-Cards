import { Pagination } from '@/data-contracts'

export type DecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type DecksAuthor = {
  id: string
  name: string
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type Deck = {
  author: DecksAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type DeckDeleteResponse = Omit<Deck, 'author'>

export type DecksMinMaxPagination = {
  max: number
  min: number
}

export type GetDecksCardArgs = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: string
  question?: string
}

export type GetDeckLearnArgs = {
  id: string
  previousCardId: string
}
export type SaveCardRatingResponse = {
  cardId: string
  grade: number
}
