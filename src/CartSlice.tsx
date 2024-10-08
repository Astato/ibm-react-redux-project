import { createSlice } from "@reduxjs/toolkit";

type ItemType = {
  [name: string]: {
    cost: number;
    image: string;
    quantity: number;
  };
};

const items: ItemType = {};

const CartSlice = createSlice({
  name: "cart",
  initialState: items,

  reducers: {
    addItem: (state, action) => {
      state[action.payload.name] = action.payload;
    },
    removeItem: (state, action) => {
      const itemToDelete = action.payload;
      delete state[itemToDelete];
    },
    updateQuantity: (state, action) => {
      const item = action.payload.name;
      const operation = action.payload.operation;
      const quantity = action.payload.quantity;
      if (quantity) {
        state[item].quantity += quantity;
      } else {
        state[item].quantity === 0
          ? (state[item].quantity = 0)
          : operation === "decrease"
          ? (state[item].quantity -= 1)
          : (state[item].quantity += 1);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
