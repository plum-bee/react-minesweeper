import React, { useState } from 'react'

interface TextFieldProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  readonly?: boolean
  testId?: string
  minLength?: number
  maxLength?: number
  required?: boolean
}

const TextField: React.FC<TextFieldProps> = ({
  disabled,
  readonly,
  testId = 'textField',
  minLength = 0,
  maxLength = 20,
  required = false
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  return (
    <input
      type='text'
      value={inputValue}
      onChange={handleChange}
      disabled={disabled}
      readOnly={readonly}
      data-testid={testId}
      className={required && inputValue.length > 0 ? 'valid' : 'invalid'}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
    />
  )
}

export default TextField
