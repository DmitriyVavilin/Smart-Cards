import { useForm } from 'react-hook-form'

import { signUpSchema } from '@/components/auth/sign-up/validator'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { ControlledInput } from '@/components/ui/controlled/controlled-Input/controlledInput'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sing-up.module.scss'

export type FormValues = z.infer<typeof signUpSchema>
type Props = {
  onSubmit: (values: FormValues) => void
}
export const SignUpForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'large'}>
        Sign Up
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
        <ControlledInput
          control={control}
          label={'Confirm Password'}
          name={'confirmPassword'}
          placeholder={'Confirm Password'}
          type={'password'}
        />
        <Button className={s.singUp} disabled={isSubmitting} fullWidth type={'submit'}>
          Sign Up
        </Button>
        <Typography className={s.description} variant={'body2'}>
          Already have an account?
        </Typography>
        <Button as={'a'} className={s.singIn} variant={'link'}>
          Sign In
        </Button>
      </form>
    </Card>
  )
}
