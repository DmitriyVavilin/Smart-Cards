import { Typography } from '@/components/ui/Typography'
import * as SliderRadixUI from '@radix-ui/react-slider'

import s from './Slider.module.scss'

type SliderProps = {
  max?: number
  min?: number
  onChange?: (value: number[]) => void
  step?: number
  value: number[]
}
export const Slider = ({ max, min, onChange, step = 1, value }: SliderProps) => {
  return (
    <div className={s.container}>
      <div className={s.sliderWrapper}>
        <div className={s.minMax}>
          <Typography as={'h3'} className={s.value} variant={'body1'}>
            {value[0]}
          </Typography>
        </div>
        <SliderRadixUI.Root
          className={s.root}
          max={max}
          min={min}
          onValueChange={onChange}
          step={step}
          value={value}
        >
          <SliderRadixUI.Track className={s.track}>
            <SliderRadixUI.Range className={s.range} />
          </SliderRadixUI.Track>
          <SliderRadixUI.Thumb aria-label={'Volume'} className={s.thumb} />
          <SliderRadixUI.Thumb aria-label={'Volume'} className={s.thumb} />
        </SliderRadixUI.Root>
        <div className={s.minMax}>
          <Typography as={'h3'} className={s.value} variant={'body1'}>
            {value[1]}
          </Typography>
        </div>
      </div>
    </div>
  )
}
