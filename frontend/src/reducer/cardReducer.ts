import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserTypeInterface {
  index: number
}

const initialState: UserTypeInterface = {
    index: 0,
}

export const cardIndexSlice = createSlice({
  name: 'cardIndex',
  initialState,
  reducers: {
    setcardIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload
    },
  },

})

// Action creators are generated for each case reducer function
export const {setcardIndex } = cardIndexSlice.actions

export default cardIndexSlice.reducer