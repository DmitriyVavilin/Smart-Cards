import {
  AuthResponse,
  SingAuthLoginArgs,
  SingAuthLoginResponse,
  SingUpAuthArgs,
  UpdateCurrentUserAuth,
  VerifyUserEmailAuth,
} from '@/services/auth/type'
import { baseApi } from '@/services/base-api'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getAuthMe: builder.query<AuthResponse, void>({
        providesTags: ['Auth'],
        query: () => {
          return {
            url: 'v1/auth/me',
          }
        },
      }),
      singAuthLogin: builder.mutation<SingAuthLoginResponse, SingAuthLoginArgs>({
        invalidatesTags: ['Auth'],
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `/v1/auth/login`,
          }
        },
      }),
      sungUpAuth: builder.mutation<AuthResponse, SingUpAuthArgs>({
        invalidatesTags: ['Auth'],
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `/v1/auth/sign-up`,
          }
        },
      }),
      updateCurrentUser: builder.mutation<AuthResponse, UpdateCurrentUserAuth | void>({
        invalidatesTags: ['Auth'],
        query: args => {
          return {
            body: args,
            method: 'PATCH',
            url: 'v1/auth/me',
          }
        },
      }),
      verifyUserEmailAuth: builder.mutation<any, VerifyUserEmailAuth>({
        query: () => {
          return {
            url: `/v1/auth/verify-email`,
          }
        },
      }),
    }
  },
})

export const { useGetAuthMeQuery } = authService
