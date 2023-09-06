import { createSlice,PayloadAction } from '@reduxjs/toolkit'

export interface ICartItem {
    flower_id:number,
    pathtoimg:string,
    title:string,
    price:number,
    quantity:number,
}

interface ICartState {
    itemsCounter:number,
    items:Array<ICartItem>,
    totalPrice:number,
    isActive:boolean,
}

const initialState: ICartState = {
    itemsCounter:0,
    items: [],
    totalPrice:0,
    isActive:false,
}

function setItemsCounter (state:ICartState) {
    state.items.map(item => {state.itemsCounter += item.quantity})
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<ICartItem>) => {
        if (state.items.length === 0){
            state.items.push(action.payload)
        }else{
            const index = state.items.findIndex(item => item.flower_id === action.payload.flower_id)
            if (index !== -1){
                state.items[index].quantity++
            }else{
                state.items.push(action.payload)
            }
        }
        setItemsCounter(state)
      
    },
    disableCart: (state) => {
        state.isActive = false
    },
    enableleCart: (state) => {
        state.isActive = true
    },
    increaseQuantity:(state, action:PayloadAction<number>) => {
        state.items.map(item => {if (item.flower_id === action.payload){item.quantity++}})
    },
    decreaseQuantity:(state, action:PayloadAction<number>) => {
        state.items.map(item => {if (item.flower_id === action.payload){if (item.quantity != 1){item.quantity--}}})
    },
    setQuantity:(state, action:PayloadAction<{flower_id:number,quantity:number}>) => {
        if (action.payload.quantity && action.payload.quantity >= 1){
            state.items.map(item => {if (item.flower_id === action.payload.flower_id){item.quantity = action.payload.quantity}})
        }
        
    },
  },
})

export const { disableCart, enableleCart, addToCart, increaseQuantity, decreaseQuantity, setQuantity } = cartSlice.actions

export default cartSlice.reducer