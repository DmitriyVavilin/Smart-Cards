import { EmailIcon } from '@/assets/emailIcon'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'

import s from './check-email.module.scss'

type Props = {
  email: string
}
export const CheckEmail = ({ email }: Props) => {
  return (
    <Card className={s.container}>
      <Typography className={s.checkMailLabel} variant={'large'}>
        Check Email
      </Typography>
      <EmailIcon />
      <Typography className={s.instructionsLabel} variant={'body2'}>
        {`We’ve sent an Email with instructions to ${email}`}
      </Typography>
      <Button className={s.confirmButton} fullWidth>
        Back to Sign In
      </Button>
    </Card>
  )
}
