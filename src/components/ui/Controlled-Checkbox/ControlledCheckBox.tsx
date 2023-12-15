import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckBox, CheckBoxProps } from '@/components/ui/Check-box'

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<CheckBoxProps, 'checked' | 'onCheckedChange'>

export const ControlledCheckBox = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return <CheckBox checked={value} disabled={disabled} onCheckedChange={onChange} {...rest} />
}
