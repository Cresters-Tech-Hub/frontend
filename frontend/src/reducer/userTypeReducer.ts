import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserTypeInterface {
  userType: string | undefined
  isEmailVerified?: boolean | undefined
}

const initialState: UserTypeInterface = {
    userType: '',
    isEmailVerified: false
}

export const UserTypeISlice = createSlice({
  name: 'userType',
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<UserTypeInterface>) => {
      return {...state, ...action.payload}
    },
  },

})

// Action creators are generated for each case reducer function
export const {setUserType } = UserTypeISlice.actions

export default UserTypeISlice.reducer