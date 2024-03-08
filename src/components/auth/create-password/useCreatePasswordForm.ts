import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const createPasswordSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false).optional(),
})
export type createPasswordValues = z.infer<typeof createPasswordSchema>

export const useCreatePasswordForm = () =>
  useForm<createPasswordValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(createPasswordSchema),
  })
