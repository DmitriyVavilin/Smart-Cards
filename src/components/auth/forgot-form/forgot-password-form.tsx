import { useForm } from 'react-hook-form'

import { loginSchema } from '@/components/auth/forgot-form/validators'
import { ControlledInput } from '@/components/controlled/controlledInput'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password-form.module.scss'

export type FormValues = z.infer<typeof loginSchema>
type Props = {
  onSubmit: (values: FormValues) => void
}
export const ForgotPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'h1'}>
        Forgot your password
      </Typography>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledInput control={control} label={'Email'} name={'email'} placeholder={'Email'} />
        <Typography className={s.description} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button className={s.sendButton} disabled={isSubmitting} fullWidth type={'submit'}>
          Send Instruction
        </Button>
        <Typography className={s.descriptionPassword} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Button as={'a'} className={s.tryLoggingIn} variant={'link'}>
          Try logging in
        </Button>
      </form>
    </Card>
  )
}
