import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    produto: {}
}

export const detailsSlice = createSlice({
  name: 'nomeDetalhes',
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.produto = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDetails } = detailsSlice.actions

export default detailsSlice.reducer