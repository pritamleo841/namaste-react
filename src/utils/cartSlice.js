import { createSlice,current } from "@reduxjs/toolkit";

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
      console.log(current(state)); //current(state) shows original state variables in array form
      state.items.length = 0; //or return {items : []}
    }
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
