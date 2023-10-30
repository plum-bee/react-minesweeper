import React from 'react'
import TextField from './TextField'
import useForm from '../hooks/useForm'

const Login = () => {
  interface State {
    [key: string]: string
  }

  const initialState: State = {
    email: '',
    password: ''
  }

  const { formData, handleChange } = useForm(initialState)

  return (
    <div>
      <TextField
        id='email'
        name='email'
        label='Email'
        placeholder='Enter your email'
        value={formData.email}
        error=''
        validated={false}
        handleInputChange={handleChange}
      />
      <TextField
        id='password'
        name='password'
        label='Password'
        placeholder='Enter your password'
        value={formData.password}
        error=''
        validated={false}
        handleInputChange={handleChange}
      />
    </div>
  )
}

export default Login
