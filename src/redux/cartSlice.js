import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state, action) => {
            const item = state.find(p => p.id === action.payload.id);
            if(item){
                item.quantity += 1;
            }
            else {
                state.push({...action.payload, quantity : 1});
            }
        },
        removeFromCart:(state, action) => {
            return state.filter(p => p.id !== action.payload);
        },
        clearCart:() => {
            return [];
        }
    }
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;