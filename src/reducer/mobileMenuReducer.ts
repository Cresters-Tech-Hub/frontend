import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IMobileMenu {
    status: boolean;
}

const initialState: IMobileMenu = {
    status: false
};

export const MobileMenuISlice = createSlice({
    name: "mobileMenuStatus",
    initialState,
    reducers: {
        setStatus: (state, action: PayloadAction<boolean>) => {
            return { ...state, status: action.payload };
        }
    }
});

// Action creators are generated for each case reducer function
export const { setStatus } = MobileMenuISlice.actions;

export default MobileMenuISlice.reducer;
