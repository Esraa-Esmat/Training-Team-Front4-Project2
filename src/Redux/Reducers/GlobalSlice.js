import { createSlice } from '@reduxjs/toolkit';

const GlobalSlice = createSlice({
  name: 'route',
  initialState: {
    activeLink: 'home',
    toggleDark: false,
    sortData: 'asc',
    searchQuery: '',
  },
  reducers: {
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
    settoggleDark: (state, action) => {
      state.toggleDark = action.payload;
    },
    setSortData: (state) => {
      state.sortData = state.sortData === 'asc' ? 'dsc' : 'asc';
  },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setActiveLink, settoggleDark , setSortData, setSearchQuery } = GlobalSlice.actions;
export default GlobalSlice.reducer;
