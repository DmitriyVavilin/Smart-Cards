import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { CheckBox } from '@/components/ui/Check-box'
import { Input } from '@/components/ui/Input'

type FormValues = {
  email: string
  password: string
  rememberMe?: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { onChange, value },
  } = useController({
    control,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} label={'email'} />
      <Input {...register('password')} label={'password'} />
      <CheckBox checked={value} label={'remember me'} onCheckedChange={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
