import { SignInForm } from '@/components/auth/sing-in'

export const Login = () => {
  return <SignInForm onSubmit={data => console.log(data)} />
}
