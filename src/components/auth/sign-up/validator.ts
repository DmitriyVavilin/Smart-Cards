import { z } from 'zod'

export const signUpSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email(), // if we need to show custom error message
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
