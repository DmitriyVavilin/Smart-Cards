import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { ControlledCheckBox } from '@/components/ui/Controlled-Checkbox/ControlledCheckBox'
import { Input } from '@/components/ui/Input'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginSchema>
type Props = {
  onSubmit: (values: FormValues) => void
}

export const LoginForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          error={errors.email?.message}
          type={'email'}
          {...register('email')}
          label={'email'}
        />
        <Input
          error={errors.password?.message}
          type={'password'}
          {...register('password')}
          label={'password'}
        />
        <ControlledCheckBox control={control} label={'remember me'} name={'rememberMe'} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
