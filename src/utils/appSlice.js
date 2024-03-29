import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isSideMenuOpen: true
    },
    reducers: {
        toggleSideMenu: (state) => {
            state.isSideMenuOpen = !state.isSideMenuOpen;
        },
        closeSideMenu: (state) => {
            state.isSideMenuOpen = false
        }
    }
})

export const {toggleSideMenu, closeSideMenu} = appSlice.actions;

export default appSlice.reducer;