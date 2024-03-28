import { Card, CardsResponse } from '@/data-contracts'
import { baseApi } from '@/services/base-api'

import {
  Deck,
  DeckDeleteResponse,
  DecksMinMaxPagination,
  DecksResponse,
  GetDeckLearnArgs,
  GetDecksArgs,
  GetDecksCardArgs,
  SaveCardRatingResponse,
} from './decks.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, FormData>({
        invalidatesTags: ['Decks'],
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/decks`,
          }
        },
      }),
      createDeckCard: builder.mutation<Card, { formData: FormData; id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...args }) => {
          return {
            body: {
              ...Object.fromEntries(args.formData),
            },
            content: 'multipart/form-data',
            method: 'POST',
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
      deleteDecks: builder.mutation<DeckDeleteResponse, string>({
        invalidatesTags: ['Decks'],
        query: id => {
          return {
            method: 'DELETE',
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDeckLearn: builder.query<Deck, GetDeckLearnArgs>({
        providesTags: ['Decks'],
        query: ({ id, ...args }) => {
          return {
            params: args,
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
      getDecks: builder.query<DecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => {
          return {
            params: args ?? {},
            url: `v2/decks`,
          }
        },
      }),
      getDecksById: builder.query<DecksResponse, { id: string }>({
        providesTags: ['Decks'],
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecksCards: builder.query<CardsResponse, GetDecksCardArgs>({
        providesTags: ['Decks'],
        query: ({ id, ...args }) => {
          return {
            params: args,
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
      getDesksMinMaxCards: builder.query<DecksMinMaxPagination, void>({
        providesTags: ['Decks'],
        query: () => {
          return {
            url: `v2/decks/min-max-cards`,
          }
        },
      }),
      saveCardRating: builder.mutation<Deck, { id: string } & SaveCardRatingResponse>({
        query: ({ id, ...args }) => {
          return {
            body: args,
            method: 'POST',
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
      updateDesks: builder.mutation<Deck, { id: string } & FormData>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...args }) => {
          return {
            body: args,
            formData: true,
            method: 'PATCH',
            url: `v1/decks/${id}`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateDeckCardMutation,
  useCreateDeckMutation,
  useDeleteDecksMutation,
  useGetDeckLearnQuery,
  useGetDecksByIdQuery,
  useGetDecksQuery,
  useGetDesksMinMaxCardsQuery,
  useLazyGetDeckLearnQuery,
  useLazyGetDecksCardsQuery,
  useLazyGetDesksMinMaxCardsQuery,
  useUpdateDesksMutation,
} = decksService
