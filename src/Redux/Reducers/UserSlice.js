import { createSlice } from '@reduxjs/toolkit';
import { PapersData, ServicesDataUserDashboard } from '../../Components/DummyData/DummyData';
// import { ServicesDataUserDashboard } from '../../Components/DummyData/DummyData';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    login: false,
    userRole: null,
    user: {},
    activeLink: 'All Services',
    papers: PapersData,
    service: ServicesDataUserDashboard,
    show: false
  },
  reducers: {
    setLogin: (state ,action) => {
      state.login = action.payload;
    },
    setUserRole: (state ,action) => {
      state.userRole = action.payload;
      console.log(state.userRole);
    },
    setLogout: (state ,action) => {
      state.login = action.payload;
      state.userRole = null
    },
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
    deletePaper: (state, action) => {
      state.papers = state.papers.filter(paper => paper.id !== action.payload);
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },


  },
});

export const { setLogin,setLogout, userRole, addUser, updateUser, setUserRole, setActiveLink, deletePaper, setShow } = UserSlice.actions;
export default UserSlice.reducer;