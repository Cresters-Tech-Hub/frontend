import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUtils {
  decline: boolean
}

const initialState: IUtils = {
    decline: false,
}

export const utilsSlice = createSlice({
  name: 'utilsSlice',
  initialState,
  reducers: {
    setDecline: (state, action: PayloadAction<boolean>) => {
      state.decline = action.payload
    },
  },

})

// Action creators are generated for each case reducer function
export const {setDecline } = utilsSlice.actions

export default utilsSlice.reducer