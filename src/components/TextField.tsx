import React from 'react'

interface TextFieldProps {
  id: string
  name: string
  label: string
  placeholder: string
  value: string
  error: string
  validated: boolean
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  testid: string
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  value,
  error,
  validated,
  handleInputChange,
  testid
}) => {
  const inputClassName = validated ? 'validated' : ''

  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          name={name}
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className={inputClassName}
          data-testid={testid}
        />
        {error !== '' && <p data-testid={`${testid}-error`}>{error}</p>}
      </label>
    </div>
  )
}

export default TextField
