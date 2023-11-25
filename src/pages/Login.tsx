import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import TextField from '../components/TextField'
import type { FormFieldData, FormFieldErrors } from '../hooks/useForm'
import axiosInstance from '../api/axiosConfig'

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
    if (values.password === '') {
      errors.password = 'Password is required'
    }

    return errors
  }

  const { formFieldData, formFieldErrors, updateFormData } = useForm(
    initialValues,
    validate
  )

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()

    const formErrors = validate(formFieldData)
    if (Object.keys(formErrors).length > 0) {
      setFormFieldErrors(formErrors)
      return
    }

    const enteredUsername = formFieldData.username
    const enteredPassword = formFieldData.password

    axiosInstance
      .get(`/users/username/${enteredUsername}`)
      .then(response => {
        const userData = response.data

        if (userData.password === enteredPassword) {
          navigate('/leaderboard')
        } else {
          setFormFieldErrors({
            ...formFieldErrors,
            login: 'Invalid credentials'
          })
        }
      })
      .catch(error => {
        console.error('Login error', error)
      })
  }

  const handleRegister = (): void => {
    navigate('/register')
  }

  return (
    <form onSubmit={handleSubmit} data-testid='login-form'>
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
      <button type='button' onClick={handleRegister}>
        Register
      </button>
    </form>
  )
}

export default LoginForm
