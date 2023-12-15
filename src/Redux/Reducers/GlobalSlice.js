import { createSlice } from '@reduxjs/toolkit';

const GlobalSlice = createSlice({
  name: 'route',
  initialState: {
    activeLink: 'home',
    toggleDark: false,
  },
  reducers: {
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
    settoggleDark: (state, action) => {
      state.toggleDark = action.payload;
    },
  },
});

export const { setActiveLink, settoggleDark } = GlobalSlice.actions;
export default GlobalSlice.reducer;
