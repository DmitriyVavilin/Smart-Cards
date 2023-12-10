import React, { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import s from './Input.module.scss'

import passwordCloseIcons from './../../../assets/inputIcons/closeIcon.png'
import passwordOpenIcons from './../../../assets/inputIcons/openIcon.png'
import searchIcons from './../../../assets/inputIcons/searchIcon.png'

export type InputProps = {
  active?: boolean
  className?: string
  disabled?: boolean
  error?: string | undefined
  label?: string
  onChange?: (value: string) => void
  onEnter?: () => void
  placeholder?: string
  theme?: 'active' | 'disabled' | 'focus' | 'hover'
  type: string
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef(
  (
    {
      active,
      className,
      disabled,
      error,
      label,
      onBlur,
      onChange,
      onEnter,
      placeholder,
      theme,
      type,
      value,
      ...restPros
    }: InputProps,
    ref: React.LegacyRef<HTMLInputElement> | undefined
  ) => {
    const showError = !!error && error.length > 0
    const [inputValue, setInputValue] = useState(value)
    const [showPassword, SetShowPassword] = useState(false)
    const getType = (type: string) => {
      if (type === 'password') {
        return showPassword ? 'text' : 'password'
      }

      return type
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.currentTarget.value)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && onEnter) {
        onEnter()
      }
    }

    const inputClasses = clsx(s.input, {
      [s.active]: theme === 'active',
      [s.disabled]: theme === 'disabled',
      [s.errorInput]: showError,
      [s.focus]: theme === 'focus',
      [s.hover]: theme === 'hover',
      [s.passwordInput]: type === 'password',
      [s.searchInput]: type === 'search',
    })

    return (
      <div>
        <div>
          <label className={s.inputLabel}>Input</label>
        </div>
        <div className={s.inputContainer}>
          {type === 'search' && (
            <button className={s.searchIcon} type={'button'}>
              <img alt={'icon'} className={s.searchIcon} src={searchIcons} />
            </button>
          )}
          {type === 'password' && (
            <button
              className={s.passwordIcon}
              onClick={() => SetShowPassword(!showPassword)}
              type={'button'}
            >
              {showPassword ? (
                <img alt={'icon'} className={s.passwordIcon} src={passwordCloseIcons} />
              ) : (
                <img alt={'icon'} className={s.passwordOpenIcon} src={passwordOpenIcons} />
              )}
            </button>
          )}
          <input
            className={inputClasses}
            disabled={disabled}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            type={getType(type)}
            value={inputValue}
            {...restPros}
            ref={ref}
            style={{ paddingLeft: type === 'search' ? '45px' : undefined }}
          />
        </div>
        {showError && <span className={s.errorText}>{error}</span>}
      </div>
    )
  }
)
