import { useForm } from 'react-hook-form'

import { signUpSchema } from '@/components/auth/sign-up/validator'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Typography } from '@/components/ui/Typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/components/ui/card/card.module.scss'

export type FormValues = z.infer<typeof signUpSchema>
type Props = {
  onSubmit: (values: FormValues) => void
}
const SignUpForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Card className={s.loginPopUp}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <Typography
          style={{ color: '#fff', paddingBottom: '27px', textAlign: 'center' }}
          variant={'large'}
        >
          Sign Up
        </Typography>
        <Input
          {...register('email')}
          error={errors.email?.message}
          label={'Email'}
          style={{ marginBottom: '24px' }}
          type={'email'}
        />
        <Input
          {...register('password')}
          error={errors.password?.message}
          label={'Password'}
          style={{ marginBottom: '24px' }}
          type={'password'}
        />
        <Input
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
          label={'Confirm Password'}
          style={{ marginBottom: '12px' }}
          type={'password'}
        />
        <Button
          disabled={isSubmitting}
          fullWidth
          style={{ marginBottom: '20px', marginTop: '66px' }}
          type={'submit'}
        >
          Sign In
        </Button>
        <Typography
          style={{ color: '#C3C1C7', marginBottom: '12px', textAlign: 'center' }}
          variant={'body2'}
        >
          Already have an account?
        </Typography>
        <Typography
          as={'a'}
          style={{
            color: '#8C61FF',
            fontSize: '16px',
            fontWeight: 700,
            textAlign: 'center',
            textDecoration: 'underline',
          }}
          variant={'link1'}
        >
          Sign In
        </Typography>
      </form>
    </Card>
  )
}

export default SignUpForm
