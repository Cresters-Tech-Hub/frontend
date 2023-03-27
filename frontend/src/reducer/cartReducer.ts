import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Props {
  count?: number
  amount?:number
}

const initialState: Props = {
    count: 0,
    amount: 0
}

export const cartCounterSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCartCounter: (state, action: PayloadAction<Props>) => {
      return {...state, count:action.payload.count, amount:action.payload.amount}
    },
  },

})

// Action creators are generated for each case reducer function
export const {setCartCounter} = cartCounterSlice.actions

export default cartCounterSlice.reducer