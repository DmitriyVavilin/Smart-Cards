import { z } from 'zod'

export const personalInfoSchema = z.object({
  nickname: z.string().min(1),
})
