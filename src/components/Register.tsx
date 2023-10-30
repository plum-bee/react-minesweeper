import React from 'react'
import TextField from './TextField'
import useForm from '../hooks/useForm'

const Register = () => {
  interface State {
    [key: string]: string
  }

  const initialState: State = {
    name: '',
    surname: '',
    country: '',
    username: '',
    email: '',
    password: ''
  }

  const { formData, handleChange } = useForm(initialState)

  return (
    <div>
      <TextField
        id='name'
        name='name'
        label='Name'
        placeholder='Enter your name'
        value={formData.name}
        error=''
        validated={false}
        handleInputChange={handleChange}
      />
      <TextField
        id='surname'
        name='surname'
        label='Surname'
        placeholder='Enter your surname'
        value={formData.surname}
        error=''
        validated={false}
        handleInputChange={handleChange}
      />
      <TextField
        id='country'
        name='country'
        label='Country'
        placeholder='Enter your country'
        value={formData.country}
        error=''
        validated={false}
        handleInputChange={handleChange}
      />
      <TextField
        id='username'
        name='username'
        label='Username'
        placeholder='Enter your username'
        value={formData.username}
        error=''
        validated={false}
        handleInputChange={handleChange}
      />
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

export default Register
