import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import filterReducer from '../features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares().concat(apiSlice.middleware),
})
