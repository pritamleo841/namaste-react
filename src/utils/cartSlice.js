import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //reducer function, mapped to action
    addItem: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
      //state.items.splice(action.payload)
      //state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
