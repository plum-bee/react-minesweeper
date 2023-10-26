import React from 'react'

interface SelectFieldProps {
  id: string
  name: string
  label: string
  placeholder: string
  value: string
  options: string[]
  handleInputChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  value,
  options,
  handleInputChange
}) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          name={name}
          value={value}
          defaultValue={placeholder}
          onChange={handleInputChange}
        >
          <option value='' disabled hidden>
            {placeholder}
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default SelectField
