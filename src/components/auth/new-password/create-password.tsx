import { useForm } from 'react-hook-form'

import { loginSchema } from '@/components/auth/forgot-form/validators'
import { ControlledInput } from '@/components/controlled/controlledInput'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-password.module.scss'

export type FormValues = z.infer<typeof loginSchema>
type Props = {
  onSubmit: (values: FormValues) => void
}

export const CreatePassword = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'large'}>
        Create new password
      </Typography>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledInput control={control} label={'Password'} name={'password'} type={'password'} />
        <Typography className={s.description} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button disabled={isSubmitting} fullWidth type={'submit'}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
