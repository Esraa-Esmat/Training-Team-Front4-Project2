import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Reducers/UserSlice'
import GlobalSlice from './Reducers/GlobalSlice'

const Store = configureStore({
  reducer: {
    UserSlice,
    GlobalSlice,
},
});

export default Store;

