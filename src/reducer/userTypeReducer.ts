import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserTypeInterface {
  userType: string | undefined
}

const initialState: UserTypeInterface = {
    userType: '',
}

export const UserTypeISlice = createSlice({
  name: 'userType',
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<string | undefined>) => {
      return {...state, userType:action.payload}
    },
  },

})

// Action creators are generated for each case reducer function
export const {setUserType } = UserTypeISlice.actions

export default UserTypeISlice.reducer