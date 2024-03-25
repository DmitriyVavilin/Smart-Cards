import {baseApi} from '@/services/base-api'
import {
  CreatedDecksCardRequest,
  Deck,
  DecksMinMaxPagination,
  DecksResponse, GetDeckLearnArgs,
  GetDecksArgs,
  GetDecksCardArgs, SaveCardRatingResponse,
} from './decks.types'
import {Card, CardsResponse} from "@/data-contracts";

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
      getDecks: builder.query<DecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => {
          return {
            params: args ?? {},
            url: `v2/decks`,
          }
        },
      }),
      getDecksById: builder.query<DecksResponse, {id: string}>({
        providesTags: ['Decks'],
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDesksMinMaxCards: builder.query<DecksMinMaxPagination,void>({
        providesTags: ['Decks'],
        query: () => {
          return {
            url: `v2/decks/min-max-cards`
          }
        }
      }),
      updateDesks: builder.mutation<Deck, {id: string} & FormData >({
        invalidatesTags: ['Decks'],
        query:({id, ...args}) => {
          return {
            url: `v1/decks/${id}`,
            body: args,
            method: 'PATCH',
            formData: true
          }
        }
      }),
      deleteDecks: builder.mutation<Deck,{id: string}>({
        invalidatesTags: ['Decks'],
        query: ({id}) => {
          return {
            url: `v1/decks/${id}`,
            method: 'DELETE'
          }
        }
      }),
      getDecksCards: builder.query<CardsResponse,GetDecksCardArgs>({
        providesTags: ['Decks'],
        query: ({id, ...args}) => {
          return {
            url: `v1/decks/${id}/cards`,
            params: args
          }
        }
      }),
      createDeckCard: builder.mutation<Card,{id: string} & FormData>({
        invalidatesTags: ['Decks'],
        query: ({id, ...args}) => {
          return {
            url: `v1/decks/${id}/cards`,
            method: 'POST',
            body: args
          }
        }
      }),
      getDeckLearn: builder.query<Deck,GetDeckLearnArgs>({
        providesTags: ['Decks'],
        query: ({id, ...args}) => {
          return {
            url: `v1/decks/${id}/cards`,
            params: args
          }
        }
      }),
      saveCardRating: builder.mutation<Deck,{id: string} &SaveCardRatingResponse>({
        query: ({id,...args}) => {
          return {
            url: `v1/decks/${id}/cards`,
            method: 'POST',
            body: args
          }
        }
      })
    }
  },
})

export const {useUpdateDesksMutation, useCreateDeckMutation,useGetDecksByIdQuery, useGetDecksQuery,useGetDesksMinMaxCardsQuery, } = decksService
