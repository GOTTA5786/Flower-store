import { createSlice,PayloadAction } from '@reduxjs/toolkit'

function setLink (state:IFilter):void {
    const brightnessString = (Object.keys(state.brightness).length !== 0) ? `/brightness-${Object.keys(state.brightness).join('-')}` : ''
    const colorString = (Object.keys(state.color).length !== 0) ? `/color-${Object.keys(state.color).join('-')}` : ''
    const formatString = (Object.keys(state.format).length !== 0) ? `/format-${Object.keys(state.format).join('-')}` : ''
    const priceString = (state.leftDotState !== state.minPrice || state.rightDotState !== state.maxPrice) ? `/price?minPrice=${state.leftDotState}&maxPrice=${state.rightDotState}`: ''
    state.pathname = `/catalog${brightnessString}${colorString}${formatString}${priceString}`
}

interface IFilter {
    pathname:string,
    brightness: Record <string,string>,
    color: Record <string,string>,
    format: Record <string,string>,
    minPrice: number,
    maxPrice: number,
    leftDotState:number,
    rightDotState:number,
    inputMaxValue:number,
    inputMinValue:number,
}

const initialState:IFilter = {
    pathname:'',
    brightness:{},
    color: {},
    format: {},
    leftDotState:0,
    rightDotState:1000,
    inputMinValue:0,
    inputMaxValue:1000,
    minPrice:0,
    maxPrice:1000,
}

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    addBrightness: (state, action:PayloadAction<string>) => {
        state.brightness[action.payload]=(action.payload)
        setLink(state)
        
    },
    removeBrightness: (state, action:PayloadAction<string>) => {
        delete state.brightness[action.payload]
        setLink(state)
    },
    addColor: (state, action:PayloadAction<string>) => {
        state.color[action.payload]=(action.payload)
        setLink(state)
    },
    removeColor: (state, action:PayloadAction<string>) => {
        delete state.color[action.payload]
        setLink(state)
    },
    addFormat: (state, action:PayloadAction<string>) => {
        state.format[action.payload]=(action.payload)
        setLink(state)
    },
    removeFormat: (state, action:PayloadAction<string>) => {
        delete state.format[action.payload]
        setLink(state)
    },
    removeFilter: (state) => {
        state.brightness={}
        state.color={}
        state.format={}
        state.pathname = '/catalog'
        state.leftDotState = state.minPrice
        state.rightDotState = state.maxPrice
        state.inputMinValue = state.minPrice
        state.inputMaxValue = state.maxPrice
    },
    setMinUserPrice: (state, action:PayloadAction<number>) => {
        if (action.payload+1 < state.rightDotState){
          state.leftDotState = action.payload
          state.inputMinValue = action.payload
        }else{
          state.leftDotState = state.rightDotState-1
          state.inputMinValue = state.rightDotState-1
        }
        setLink(state)
    },
    setMaxUserPrice: (state, action:PayloadAction<number>) => {
        if (action.payload > state.leftDotState +1){
            state.rightDotState = action.payload
            state.inputMaxValue = action.payload
        }else{
        state.rightDotState = state.leftDotState+1
        state.inputMaxValue = state.leftDotState+1
        }
        setLink(state)
    },
    setUserInputMinPrice: (state, action:PayloadAction<number>) => {
        state.inputMinValue = action.payload
    },
    setUserInputMaxPrice: (state, action:PayloadAction<number>) => {
        state.inputMaxValue = action.payload
    },
  },
})

export const { addBrightness, addColor,addFormat,removeBrightness, removeColor,removeFormat,removeFilter,setMinUserPrice, setMaxUserPrice,setUserInputMinPrice,setUserInputMaxPrice } = filterSlice.actions

export default filterSlice.reducer