import { CartActionTypes } from "./cartActionType";

export const initialCartState = {
  items: [],
  totalAmount: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    // ADD TO CART
    case CartActionTypes.ADD: {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedItems;

      if (existingIndex >= 0) {
        // Item already exists → increase quantity
        updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += 1;
      } else {
        // New item → add
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      const updatedTotal = state.totalAmount + action.payload.price;

      return { items: updatedItems, totalAmount: updatedTotal };
    }

    default:
      return state;
  }
}
