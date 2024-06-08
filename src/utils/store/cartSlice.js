import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => {
            // Way 1
            state.items.length = 0

            // way 2
            // return { items: [] }
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

