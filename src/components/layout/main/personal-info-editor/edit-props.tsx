import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { FormValues } from '@/components/layout/main/personal-info-editor/personal-info'
import { personalInfoSchema } from '@/components/layout/main/personal-info-editor/validator'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

export type EditProps = {
  editNicknameMode: boolean
  onSubmit: (values: FormValues) => void
  setEditNicknameMode: (editNicknameMode: boolean) => void
  userName: string
}

export const EditNicknameForm = ({
  editNicknameMode,
  onSubmit,
  setEditNicknameMode,
  userName,
}: EditProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(personalInfoSchema),
  })
  const onEditionalInfoSubmit = async (values: FormValues) => {
    try {
      onSubmit(values)
    } catch (e) {
      console.log(e)
    } finally {
      setEditNicknameMode(!editNicknameMode)
    }
  }

  useEffect(() => {
    setValue('nickname', userName, { shouldDirty: true })
  }, [])

  return (
    <form noValidate onSubmit={handleSubmit(onEditionalInfoSubmit)}>
      <DevTool control={control} />
      <Input
        {...register('nickname')}
        error={errors.nickname?.message}
        label={'Nickname'}
        // styles={{ paddingBottom: '16px', paddingTop: '12px' }}
        type={'text'}
      />
      <Button disabled={isSubmitting} fullWidth type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
