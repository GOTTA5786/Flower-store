import { createSlice,PayloadAction } from '@reduxjs/toolkit'


export interface ICartItem {
    flower_id:number,
    pathtoimg:string,
    title:string,
    price:number,
    quantity:number,
}

interface ICartState {
    items:Map<number,ICartItem>,
    totalPrice:number,
    isActive:boolean,
}

const initialState: ICartState = {
    items: new Map<number,ICartItem>(),
    totalPrice:0,
    isActive:false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<ICartItem>) => {
        if (!state.items.has(action.payload.flower_id)){
            state.items.set(action.payload.flower_id, action.payload)
            state.totalPrice = +((action.payload.price * action.payload.quantity) + state.totalPrice).toFixed(2)
            
        }
    },
    removeFromCart: (state, action:PayloadAction<number>) => {
        if (state.items.has(action.payload)){
            let item = state.items.get(action.payload)
            if (item){
                state.totalPrice = +((item.price * item.quantity) - state.totalPrice).toFixed(2)
            }
            state.items.delete(action.payload)
        }
    },
    clearCart: (state) => {
        state.items.clear(),
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
        if (state.items.has(action.payload)){
           let item = state.items.get(action.payload)
           if (item && item.quantity < 100){
            item.quantity ++
            state.items.set(action.payload,item)
            state.totalPrice = +(item.price + state.totalPrice).toFixed(2) 
           }
        }
    },
    decreaseQuantity:(state, action:PayloadAction<number>) => {
        if (state.items.has(action.payload)){
            let item = state.items.get(action.payload)
            if (item && item.quantity != 1){
             item.quantity --
             state.items.set(action.payload,item)
             state.totalPrice = +(state.totalPrice - item.price).toFixed(2) 
            }
         }
    },
    setQuantity:(state, action:PayloadAction<{flower_id:number,quantity:number}>) => {
        if (action.payload.quantity && action.payload.quantity >= 1){
            if (state.items.has(action.payload.flower_id)){
                let item = state.items.get(action.payload.flower_id)
                if (item){
                 state.totalPrice = +(state.totalPrice + ((action.payload.quantity - item.quantity) * item.price)).toFixed(2)
                 item.quantity = action.payload.quantity
                 state.items.set(action.payload.flower_id,item)
                }
             }
        }
    },
  },
})

export const { disableCart, enableleCart, addToCart, increaseQuantity, decreaseQuantity, setQuantity, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer