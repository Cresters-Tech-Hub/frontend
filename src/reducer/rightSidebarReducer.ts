import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IRightSidebarReducer {
    data: { type: string; index: number };
}

const initialState: IRightSidebarReducer = {
    data: { type: "food", index: 0 }
};

export const cardIndexSlice = createSlice({
    name: "rightSidebarReducer",
    initialState,
    reducers: {
        setRightSidebarType: (state, action: PayloadAction<IRightSidebarReducer | any>) => {
            return { ...state, data: { ...action.payload } };
        }
    }
});

// Action creators are generated for each case reducer function
export const { setRightSidebarType } = cardIndexSlice.actions;

export default cardIndexSlice.reducer;
