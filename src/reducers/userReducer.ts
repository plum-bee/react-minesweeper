import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  name: string
  surname: string
  country: string
  username: string
  email: string
  password: string
  score: number
}

const initialState: UserState = {
  name: '',
  surname: '',
  country: '',
  username: '',
  email: '',
  password: '',
  score: 0
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserData: (
      state: UserState,
      action: PayloadAction<{ field: string, value: string | number }>
    ) => {
      const { field, value } = action.payload
      return { ...state, [field]: value }
    }
  }
})

export const { updateUserData } = userSlice.actions

export default userSlice.reducer
