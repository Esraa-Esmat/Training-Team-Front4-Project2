import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Reducers/UserSlice'
import GlobalSlice from './Reducers/GlobalSlice'
import AdminSlice from './Reducers/AdminSlice'

const Store = configureStore({
  reducer: {
    UserSlice,
    GlobalSlice,
    AdminSlice,
},
});

export default Store;

