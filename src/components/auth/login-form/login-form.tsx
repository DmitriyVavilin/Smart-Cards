import { loginFormValues, useLoginForm } from '@/components/auth/login-form/useLoginForm'
import { Button } from '@/components/ui/Button'
import { ControlledCheckBox } from '@/components/ui/controlled/Controlled-Checkbox/ControlledCheckBox'
import { ControlledInput } from '@/components/ui/controlled/controlled-Input/controlledInput'
import { DevTool } from '@hookform/devtools'

import s from './login-form.module.scss'

type Props = {
  onSubmit: (values: loginFormValues) => void
}

export const LoginForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useLoginForm()

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput control={control} label={'Email'} name={'email'} type={'email'} />
        <ControlledInput control={control} label={'Password'} name={'password'} type={'password'} />
        <ControlledCheckBox control={control} label={'Remember me'} name={'rememberMe'} />
        <Button className={s.btnSubmit} type={'submit'}>
          Submit
        </Button>
      </form>
    </>
  )
}
