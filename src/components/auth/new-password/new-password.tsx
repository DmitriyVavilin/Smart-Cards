import { useForm } from 'react-hook-form'

import { loginSchema } from '@/components/auth/forgot-form/validators'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Typography } from '@/components/ui/Typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/components/ui/card/card.module.scss'

export type FormValues = z.infer<typeof loginSchema>
type Props = {
  onSubmit: (values: FormValues) => void
}

export const NewPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.loginPopUp}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <Typography
          style={{ color: '#fff', paddingBottom: '27px', textAlign: 'center' }}
          variant={'large'}
        >
          Create new password
        </Typography>
        <Input
          {...register('password')}
          error={errors.password?.message}
          label={'Password'}
          style={{ marginBottom: '12px' }}
          type={'password'}
        />
        <Typography
          style={{ color: '#C3C1C7', marginBottom: '12px', opacity: 0.5 }}
          variant={'body2'}
        >
          Create new password and we will send you further instructions to email
        </Typography>
        <Button
          disabled={isSubmitting}
          fullWidth
          style={{ marginBottom: '20px', marginTop: '41px' }}
          type={'submit'}
        >
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
