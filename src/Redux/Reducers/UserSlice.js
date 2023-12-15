import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    login: false,
    userRole: null,
    users: [],
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.login = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.login = false;
      state.user = {};
    },
    setUserRole: (state, action) => {
      const id = action.payload;

      if (id.startsWith('000')) {
        state.userRole = 'admin';
      } else if (id.startsWith('111')) {
        state.userRole = 'user';
      } else {
        state.userRole = null;
      }
    },
    addUser: (state, actions) => {
      let id = Date.now();
      state.users.push({ ...actions.payload, id });
    },
    updateUser: (state, action) => {
      let data = action.payload;
      const users = state.users.map((ele) =>
        ele.id === data.id ? data : ele
      );
      state.users = users;
    },
  },
});

export const { login, logout, userRole, addUser, updateUser,setUserRole } = UserSlice.actions;
export default UserSlice.reducer;