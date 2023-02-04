import { configureStore } from "@reduxjs/toolkit";
import UserTypeReducer from "../reducer/userTypeReducer";
import cardReducer from "../reducer/cardReducer";
import mobileMenuReducer from "../reducer/mobileMenuReducer";
import userReducer from "../reducer/userReducer";
import rightSidebarReducer from "../reducer/rightSidebarReducer";

export const store = configureStore({
    reducer: {
        userType: UserTypeReducer,
        cardIndex: cardReducer,
        mobileMenuStatus: mobileMenuReducer,
        user: userReducer,
        rightSidebarReducer: rightSidebarReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
