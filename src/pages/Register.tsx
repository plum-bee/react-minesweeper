import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm, { FormFieldData, FieldValidator } from '../hooks/useForm'
import TextField from '../components/TextField'
import axiosInstance from '../api/axiosConfig'

function Register(): JSX.Element {
  const navigate = useNavigate()
  const initialValues: FormFieldData = {
    name: '',
    surname: '',
    username: '',
    password: '',
    email: ''
  }

  const validate: FieldValidator = (values) => {
    const errors: FormFieldData = {}
    if (!values.name) {
      errors.name = 'Name is required'
    }
    if (!values.surname) {
      errors.surname = 'Surname is required'
    }
    if (!values.username) {
      errors.username = 'Username is required'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    } 
    return errors
  }

  const { formFieldData, formFieldErrors, updateFormData } = useForm(initialValues, validate)

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()

    if (Object.keys(formFieldErrors).length === 0) {
      try {
        await axiosInstance.post('/users/register', formFieldData)
        navigate('/login')
      } catch (error) {
        alert('Registration failed')
      }
    } else {
      alert('Please correct the errors before submitting.')
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id='name'
        name='name'
        label='Name'
        placeholder='Enter your name'
        value={formFieldData.name}
        handleInputChange={updateFormData}
        error={formFieldErrors.name}
      />
      <TextField
        id='surname'
        name='surname'
        label='Surname'
        placeholder='Enter your surname'
        value={formFieldData.surname}
        handleInputChange={updateFormData}
        error={formFieldErrors.surname}
      />
      <TextField
        id='username'
        name='username'
        label='Username'
        placeholder='Choose a username'
        value={formFieldData.username}
        handleInputChange={updateFormData}
        error={formFieldErrors.username}
      />
      <TextField
        id='password'
        name='password'
        label='Password'
        type='password'
        placeholder='Enter a password'
        value={formFieldData.password}
        handleInputChange={updateFormData}
        error={formFieldErrors.password}
      />
      <TextField
        id='email'
        name='email'
        label='Email'
        type='email'
        placeholder='Enter your email'
        value={formFieldData.email}
        handleInputChange={updateFormData}
        error={formFieldErrors.email}
      />
      <button type='submit'>
        Register
      </button>
    </form>
  )
}

export default Register

