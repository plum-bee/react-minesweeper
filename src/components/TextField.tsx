import React, { useState } from 'react'

interface TextFieldProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  isDisabled?: boolean
  isReadOnly?: boolean
  testId?: string
  minLength?: number
  maxLength?: number
  isRequired?: boolean
  customValidator?: (value: string) => boolean
  label?: string
}

const TextField: React.FC<TextFieldProps> = ({
  label = 'label',
  isDisabled = false,
  isReadOnly = false,
  testId = 'textField',
  minLength = 0,
  maxLength = 20,
  isRequired = false,
  customValidator
}) => {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  const isFieldValid = (): boolean => {
    if (isRequired && inputValue.length === 0) {
      setErrorMessage('This field is required')
      return false
    }
    if (minLength !== undefined && inputValue.length < minLength) {
      setErrorMessage(`Minimum length is ${minLength}`)
      return false
    }
    if (maxLength !== undefined && inputValue.length > maxLength) {
      setErrorMessage(`Maximum length is ${maxLength}`)
      return false
    }
    if (customValidator !== undefined && !customValidator(inputValue)) {
      setErrorMessage('Invalid input')
      return false
    }
    setErrorMessage('')
    return true
  }

  return (
    <div>
      {label !== '' && <label htmlFor={testId}>{label}</label>}
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        disabled={isDisabled}
        readOnly={isReadOnly}
        data-testid={testId}
        className={isFieldValid() ? 'valid' : 'invalid'}
        required={isRequired}
        minLength={minLength}
        maxLength={maxLength}
      />
      {errorMessage !== '' && <div className='error'>{errorMessage}</div>}
    </div>
  )
}

export default TextField
