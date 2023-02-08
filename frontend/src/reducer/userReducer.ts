import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    data: {
        name: string | null;
        firstName: string | null;
        location: string | null;
        role: string | null;
        path:string | null;
    };
}
let local = localStorage.getItem("user");
const user = local ? JSON.parse(local) : null;

const initialState: IUser = {
    data: {
        name: user?.firstName,
        firstName: user?.lastName,
        location: user?.location,
        role: user?.role,
        path:user?.path
    }
};

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUser | any>) => {
            return { ...state, data: { ...action.payload } };
        }
    }
});

// Action creators are generated for each case reducer function
export const { setUserData } = UserSlice.actions;

export default UserSlice.reducer;
