import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as SliderRadix from '@radix-ui/react-slider'

import s from './Slider.module.scss'

type Props = {
  disabled?: boolean
  max?: number
  min?: number
  onChange?: (value: number[]) => void
  step?: null | number
  value: number | number[]
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>
export const Slider = ({ max, min, onChange, step = 1, value, ...rest }: Props) => {
  return (
    <form>
      <div className={s.container}>
        <div className={s.valueWrapper}>
          <Typography style={{ color: '#fff' }} variant={'body1'}>
            {value[0]}
          </Typography>
        </div>
        <SliderRadix.Root
          step={step}
          {...rest}
          className={s.root}
          max={max}
          min={min}
          onValueChange={onChange}
        >
          <SliderRadix.Track className={s.track}>
            <SliderRadix.Range className={s.range} />
          </SliderRadix.Track>
          <SliderRadix.Thumb aria-label={'Volume'} className={s.thumb} />
        </SliderRadix.Root>
        <div className={s.valueWrapper}>
          <Typography style={{ color: '#fff' }} variant={'body1'}>
            {value[1]}
          </Typography>
        </div>
      </div>
    </form>
  )
}
