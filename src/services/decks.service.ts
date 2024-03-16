import { baseApi } from '@/services/base-api'
import {
  CreateDecksArgs,
  GetDecksArgs,
  GetDecksByIdArgs,
  GetDecksResponse,
} from '@/services/flashcards.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, CreateDecksArgs>({
        invalidatesTags: ['Decks'],
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/decks`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => {
          return {
            params: args ?? {},
            url: `v1/decks`,
          }
        },
      }),
      getDecksById: builder.query<GetDecksResponse, GetDecksByIdArgs>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
    }
  },
})

export const { useCreateDeckMutation, useGetDecksByIdQuery, useGetDecksQuery } = decksService
