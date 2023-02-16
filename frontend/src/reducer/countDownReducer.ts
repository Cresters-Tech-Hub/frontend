import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICountDownTimer {
  isClicked:boolean
}

const initialState: ICountDownTimer = {
    isClicked:false
}

export const countDownTimerSlice = createSlice({
  name: 'CountDownTimer',
  initialState,
  reducers: {
    setCountDownTimer: (state, action: PayloadAction<boolean>) => {
        return { ...state, isClicked: action.payload };
    },
  },

})

// Action creators are generated for each case reducer function
export const {setCountDownTimer } = countDownTimerSlice.actions

export default countDownTimerSlice.reducer