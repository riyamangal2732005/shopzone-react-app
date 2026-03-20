import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      // Check if the item is already in the array
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      state.totalQuantity++;

      if (!existingItem) {
        // If it's new, add it with a quantity of 1
        state.items.push({ 
          ...newItem, 
          quantity: 1, 
          totalPrice: newItem.price 
        });
      } else {
        // If it exists, just update the quantity and sub-total
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          // If only 1 left, remove the item entirely
          state.items = state.items.filter(item => item.id !== id);
        } else {
          // Otherwise, just decrement the quantity
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;