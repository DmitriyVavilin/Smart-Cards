import { FormValues, useSignIn } from '@/components/auth/sing-in/useSignIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { ControlledCheckBox } from '@/components/ui/controlled/Controlled-Checkbox/ControlledCheckBox'
import { ControlledInput } from '@/components/ui/controlled/controlled-Input/controlledInput'
import { DevTool } from '@hookform/devtools'

import s from './sing-in.module.scss'

type Props = {
  onSubmit: (data: FormValues) => void
}

export const SignInForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useSignIn()

  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'large'}>
        Sign In
      </Typography>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledInput
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'Email'}
          type={'email'}
        />
        <ControlledInput
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />
        <ControlledCheckBox control={control} label={'Remember me'} name={'rememberMe'} />
        <Button className={s.singUp} disabled={isSubmitting} fullWidth type={'submit'}>
          Sign Up
        </Button>
        <Typography className={s.description} variant={'body2'}>
          {`Don't have an account?`}
        </Typography>
        <Button as={'a'} className={s.singIn} variant={'link'}>
          Sign Up
        </Button>
      </form>
    </Card>
  )
}
