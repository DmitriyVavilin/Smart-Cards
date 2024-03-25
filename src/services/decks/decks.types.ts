import {Pagination} from "@/data-contracts";

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
  author?: DecksAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}


export type DecksMinMaxPagination = {
  max: number
  min: number
}

export type  GetDecksCardArgs = {
  id: string
  question?: string
  answer?: string
  orderBy?: string
  currentPage?:number
  itemsPerPage?: number
}

export type GetDeckLearnArgs = {
  id: string
  previousCardId: string
}
export type SaveCardRatingResponse = {
  "cardId": string
  "grade": number
}