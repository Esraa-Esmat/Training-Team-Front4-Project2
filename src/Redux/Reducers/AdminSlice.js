import { createSlice } from '@reduxjs/toolkit';
import { BlogData, ServicesData, UsersData } from '../../Components/DummyData/DummyData';

const AdminSlice = createSlice({
    name: 'route',
    initialState: {
        activeLink: 'Add New User',
        // sortData: 'asc',
        // searchQuery: '',
        users: UsersData,
        blogs: BlogData,
        service: ServicesData
    },
    reducers: {
        setActiveLink: (state, action) => {
            state.activeLink = action.payload;
        },
        // setSortData: (state) => {
        //     state.sortData = state.sortData === 'asc' ? 'dsc' : 'asc';
        // },
        // setSearchQuery: (state, action) => {
        //     state.searchQuery = action.payload;
        // },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        deleteService: (state, action) => {
            state.service = state.service.filter(service => service.id !== action.payload);
        },
        deleteBlog: (state, action) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
        },


    },
});

export const { setActiveLink, deleteUser, deleteBlog, deleteService } = AdminSlice.actions;
export default AdminSlice.reducer;
