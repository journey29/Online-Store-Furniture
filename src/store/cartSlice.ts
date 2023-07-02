import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "../types/types";

interface CartState {
    cartItems: ICart[],
    isActive:boolean
}

const initialState:CartState = {
    cartItems:[],
    isActive:false
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<{title:string, img:string, price:number, inputValue:number}>) {
        const newItem = {
            title: action.payload.title,
            img: action.payload.img,
            price: action.payload.price,
            inputValue: action.payload.inputValue
        };
        const repeatedItem = state.cartItems.find((item) => item.title === newItem.title);
        if (!repeatedItem) {
            state.cartItems.push(newItem)
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.title !== action.payload.title
          );
        }
    },
    removeCartItem(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.title !== action.payload
      );
    },
    setCartItemInputValue(state,action: PayloadAction<{ title: string; value: number }>) {
      const changedIndex = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );

      if (changedIndex !== -1) {
        state.cartItems[changedIndex].inputValue = action.payload.value;
      }
    },
    setIsActive(state, action: PayloadAction<boolean>) {
      state.isActive = action.payload;
    },
  },
});



export const {setCartItemInputValue, setCartItems, removeCartItem, setIsActive} = cartSlice.actions
export default cartSlice.reducer
