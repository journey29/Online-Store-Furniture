import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWishItem } from "../types/types";

interface WishlistState {
  wishListItems: IWishItem[];
}

const initialState: WishlistState = {
  wishListItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishListItems(state, action: PayloadAction<{title:string, img:string, price:number, added:boolean}>) {
        const newItem = {
            title: action.payload.title,
            img: action.payload.img,
            price: action.payload.price,
            added: action.payload.added
        };

        console.log(123);
        

        const repeatedItem = state.wishListItems.some(item => item.title === action.payload.title);
        if (!repeatedItem) {
            state.wishListItems.push(newItem)
        } else {
          state.wishListItems = state.wishListItems.filter(
            (item) => item.title !== action.payload.title
          );
        }
    },
    removeWishListItem(state, action: PayloadAction<string>) {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.title !== action.payload
      );
    },
  },
});

export const {setWishListItems, removeWishListItem} = wishlistSlice.actions
export default wishlistSlice.reducer
