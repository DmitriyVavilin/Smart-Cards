import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false).optional(),
})
export type forgotPasswordValues = z.infer<typeof forgotPasswordSchema>

export const useForgotPasswordForm = () =>
  useForm<forgotPasswordValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(forgotPasswordSchema),
  })
