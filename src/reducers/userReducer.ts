import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  surname: '',
  country: '',
  username: '',
  password: '',
  email: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setSurname: (state, action) => {
      state.surname = action.payload
    },
    setCountry: (state, action) => {
      state.country = action.payload
    },
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    }
  }
})

export const {
  setName,
  setSurname,
  setCountry,
  setUsername,
  setPassword,
  setEmail
} = userSlice.actions

export default userSlice.reducer
