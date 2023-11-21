import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import TextField from '../components/TextField'
import type { FormFieldData, FormFieldErrors } from '../hooks/useForm'

function LoginForm (): JSX.Element {
  const navigate = useNavigate()
  const initialValues = {
    username: '',
    password: ''
  }

  const validate = (values: FormFieldData): FormFieldErrors => {
    const errors: FormFieldErrors = {}

    if (values.username === '') {
      errors.username = 'Username is required'
    }

    return errors
  }

  const { formFieldData, formFieldErrors, updateFormData } = useForm(
    initialValues,
    validate
  )

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    navigate('/register')
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id='username'
        name='username'
        label='Username'
        placeholder='Enter your username'
        value={formFieldData.username}
        error={formFieldErrors.username}
        validated={true}
        handleInputChange={updateFormData}
        testid='username'
      />
      <TextField
        id='password'
        name='password'
        label='Password'
        placeholder='Enter your password'
        value={formFieldData.password}
        error={formFieldErrors.password}
        validated={true}
        handleInputChange={updateFormData}
        testid='password'
      />
      <button type='submit' data-testid='login'>
        Login
      </button>
    </form>
  )
}

export default LoginForm
