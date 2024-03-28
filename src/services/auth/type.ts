export type AuthResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type UpdateCurrentUserAuth = {
  avatar: string
  name: string
}

export type SingAuthLoginResponse = {
  accessToken: string
}

export type SingAuthLoginArgs = {
  email: string
  password: string
  rememberMe: true
}

export type SingUpAuthArgs = {
  email: string
  html: '<b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="http://localhost:3000/confirm-email/##token##">Confirm email</a>. If it doesn\'t work, copy and paste the following link in your browser:<br/>http://localhost:3000/confirm-email/##token##'
  name: string
  password: string
  sendConfirmationEmail: false
  subject: string
}

export type VerifyUserEmailAuth = {
  code: string
}
