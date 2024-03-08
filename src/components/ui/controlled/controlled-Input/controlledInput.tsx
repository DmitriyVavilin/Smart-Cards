import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui/Input'

export type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<InputProps, 'onValueChange'>
export const ControlledInput = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, disabled, name, shouldUnregister })

  return (
    <Input
      disabled={disabled}
      error={error?.message}
      onValueChange={onChange}
      value={value}
      {...rest}
    />
  )
}
