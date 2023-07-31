import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: 'all',
  search: '',
}

const filterSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    byFilter: (state, action) => {
      state.filter = action.payload
    },
    bySearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export default filterSlice.reducer
export const { byFilter, bySearch } = filterSlice.actions
