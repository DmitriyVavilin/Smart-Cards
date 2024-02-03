import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import {
  RadioGroupItem,
  RadioGroupItemProps,
} from '@/components/ui/RadioGroup/RadioGroupItem/RadioGroupItem'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './RadioGroup.module.scss'

type Props = {
  options: RadioGroupItemProps[]
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, Props>(
  ({ options, ...rest }, ref) => {
    return (
      <form>
        <RadioGroupRadix.Root
          aria-label={'View density'}
          className={s.root}
          defaultValue={'default'}
          ref={ref}
          {...rest}
        >
          {options.map(option => {
            return <RadioGroupItem key={option.label} {...option} />
          })}
        </RadioGroupRadix.Root>
      </form>
    )
  }
)
