import { ReactNode } from 'react'

import { Typography } from '@/components/ui/Typography'

import s from './dropDownUserLabel.module.scss'

export type Props = {
  email?: string
  icon?: ReactNode | string
  name?: string
}
export const DropDownUserLabel = ({ email, icon, name }: Props) => {
  return (
    <div className={s.container}>
      {icon}
      <div className={s.wrapper}>
        <Typography className={s.name} variant={'caption'}>
          {name}
        </Typography>
        <div>
          <Typography className={s.email} variant={'caption'}>
            {email}
          </Typography>
        </div>
      </div>
    </div>
  )
}
