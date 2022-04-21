import { createSlice} from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    name:"cart",
    initialState : {
        items:[]
    },
    reducers:{
        addToCart:(state,action) => {
            state.items = [...state.items,action.payload]
        },
        removeFromCart:(state,action)=>{
        const index = state.items.findIndex((cartItem) => cartItem.id === action.payload.id)

        let newcart = [...state.items];
        if(index>=0){
            newcart.splice(index,1)
        }
        else{
            console.warn("not found!")
        }
        state.items = newcart;
    
    
    },
    }
})
export const {addToCart,removeFromCart} = cartSlice.actions;
// selectors we use to pull what in our store
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) => state.cart.items.reduce((total,item) => total + item.price ,0);
export default cartSlice.reducer;