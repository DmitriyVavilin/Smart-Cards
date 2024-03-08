import {
  createPasswordValues,
  useCreatePasswordForm,
} from '@/components/auth/create-password/useCreatePasswordForm'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { ControlledInput } from '@/components/ui/controlled/controlled-Input/controlledInput'
import { DevTool } from '@hookform/devtools'

import s from './create-password.module.scss'

type Props = {
  onSubmit: (values: createPasswordValues) => void
}

export const CreatePassword = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useCreatePasswordForm()

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
