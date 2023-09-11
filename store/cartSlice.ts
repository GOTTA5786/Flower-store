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
function setTotalPrice (state:ICartState) {
    let totalPrice:number = 0
    state.items.map(item => {totalPrice += Number((item.price * item.quantity).toFixed(2))})
    state.totalPrice = totalPrice
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
        setTotalPrice(state)
    },
    removeFromCart: (state, action:PayloadAction<number>) => {
        if (state.items.length !== 0){
            const index = state.items.findIndex(item => item.flower_id === action.payload)
            if (index !== -1){
                state.items.splice(index,1)
                setItemsCounter(state)
                setTotalPrice(state)
            }
        }
    },
    clearCart: (state) => {
        state.itemsCounter = 0,
        state.items = [],
        state.totalPrice = 0
    },
    disableCart: (state) => {
        state.isActive = false
        document.body.style.overflow = 'auto'
    },
    enableleCart: (state) => {
        state.isActive = true
        document.body.style.overflow = 'hidden'
    },
    increaseQuantity:(state, action:PayloadAction<number>) => {
        state.items.map(item => {if (item.flower_id === action.payload){item.quantity++}})
        setTotalPrice(state)
    },
    decreaseQuantity:(state, action:PayloadAction<number>) => {
        state.items.map(item => {if (item.flower_id === action.payload){if (item.quantity != 1){item.quantity--}}})
        setTotalPrice(state)
    },
    setQuantity:(state, action:PayloadAction<{flower_id:number,quantity:number}>) => {
        if (action.payload.quantity && action.payload.quantity >= 1){
            state.items.map(item => {if (item.flower_id === action.payload.flower_id){item.quantity = action.payload.quantity}})
            setTotalPrice(state)
        }
    },
  },
})

export const { disableCart, enableleCart, addToCart, increaseQuantity, decreaseQuantity, setQuantity, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer