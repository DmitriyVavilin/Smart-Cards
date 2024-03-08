import {
  forgotPasswordValues,
  useForgotPasswordForm,
} from '@/components/auth/forgot-form/useForgotPasswordForm'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { ControlledInput } from '@/components/ui/controlled/controlled-Input/controlledInput'
import { DevTool } from '@hookform/devtools'

import s from './forgot-password-form.module.scss'

type Props = {
  onSubmit: (values: forgotPasswordValues) => void
}
export const ForgotPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForgotPasswordForm()

  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'large'}>
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
