import React, { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'
import { ChangeHandler } from 'react-hook-form'

import CloseEyes from '@/assets/CloseEyes'
import OpenEyes from '@/assets/OpenEyes'
import Search from '@/assets/Search'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './Input.module.scss'

export type InputProps = {
  className?: string
  error?: string | undefined
  label?: string
  onChange?: ((value: string) => void) | ChangeHandler
  onEnter?: () => void
  onValueChange?: (value: string) => void
  placeholder?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      error,
      label,
      onBlur,
      onChange,
      onEnter,
      onValueChange,
      placeholder,
      type,
      ...restPros
    }: InputProps,
    ref
  ) => {
    const showError = error ? s.error : ''
    const [showPassword, SetShowPassword] = useState(false)

    const getType = (type: string | undefined) => {
      if (type === 'password') {
        return showPassword ? 'text' : 'password'
      }

      return type
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && onEnter) {
        onEnter()
      }
    }

    const classNames = {
      input: clsx(s.input, error && s.error, type === 'search' && s.withIcon, {
        withIcon: type === 'search',
      }),
      inputContainer: s.inputContainer,
      label: s.label,
      root: s.root,
    }

    return (
      <div className={classNames.root}>
        <Typography as={'h1'} className={s.label} variant={'body2'}>
          <label className={s.label}>Input</label>
        </Typography>
        <div className={s.inputContainer}>
          {type === 'search' && <Search className={s.inputSearch} />}
          {type === 'password' && (
            <button
              className={s.passwordIcon}
              onClick={() => SetShowPassword(!showPassword)}
              type={'button'}
            >
              {showPassword ? <CloseEyes /> : <OpenEyes />}
            </button>
          )}
          <input
            className={classNames.input}
            disabled={disabled}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            type={getType(type)}
            {...restPros}
            ref={ref}
          />
        </div>
        {showError && <span className={s.errorText}>{error}!</span>}
      </div>
    )
  }
)
