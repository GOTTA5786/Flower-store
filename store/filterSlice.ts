import { createSlice,PayloadAction } from '@reduxjs/toolkit'

interface IFilter {
    pathname:string,
    brightness: Record <string,string>,
    color: Record <string,string>,
    format: Record <string,string>,
}


const initialState:IFilter = {
    pathname:'',
    brightness:{},
    color: {},
    format: {},
}

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    addBrightness: (state, action:PayloadAction<string>) => {
        state.brightness[action.payload]=(action.payload)
        const brightnessString = (Object.keys(state.brightness).length !== 0) ? `/brightness-${Object.keys(state.brightness).join('-')}` : ''
        const colorString = (Object.keys(state.color).length !== 0) ? `/color-${Object.keys(state.color).join('-')}` : ''
        const formatString = (Object.keys(state.format).length !== 0) ? `/format-${Object.keys(state.format).join('-')}` : ''
        state.pathname = `/catalog${brightnessString}${colorString}${formatString}`
    },
    removeBrightness: (state, action:PayloadAction<string>) => {
        delete state.brightness[action.payload]
        const brightnessString = (Object.keys(state.brightness).length !== 0) ? `/brightness-${Object.keys(state.brightness).join('-')}` : ''
        const colorString = (Object.keys(state.color).length !== 0) ? `/color-${Object.keys(state.color).join('-')}` : ''
        const formatString = (Object.keys(state.format).length !== 0) ? `/format-${Object.keys(state.format).join('-')}` : ''
        state.pathname = `/catalog${brightnessString}${colorString}${formatString}`
    },
    addColor: (state, action:PayloadAction<string>) => {
        state.color[action.payload]=(action.payload)
        const brightnessString = (Object.keys(state.brightness).length !== 0) ? `/brightness-${Object.keys(state.brightness).join('-')}` : ''
        const colorString = (Object.keys(state.color).length !== 0) ? `/color-${Object.keys(state.color).join('-')}` : ''
        const formatString = (Object.keys(state.format).length !== 0) ? `/format-${Object.keys(state.format).join('-')}` : ''
        state.pathname = `/catalog${brightnessString}${colorString}${formatString}`
    },
    removeColor: (state, action:PayloadAction<string>) => {
        delete state.color[action.payload]
        const brightnessString = (Object.keys(state.brightness).length !== 0) ? `/brightness-${Object.keys(state.brightness).join('-')}` : ''
        const colorString = (Object.keys(state.color).length !== 0) ? `/color-${Object.keys(state.color).join('-')}` : ''
        const formatString = (Object.keys(state.format).length !== 0) ? `/format-${Object.keys(state.format).join('-')}` : ''
        state.pathname = `/catalog${brightnessString}${colorString}${formatString}`
    },
    addFormat: (state, action:PayloadAction<string>) => {
        state.format[action.payload]=(action.payload)
        const brightnessString = (Object.keys(state.brightness).length !== 0) ? `/brightness-${Object.keys(state.brightness).join('-')}` : ''
        const colorString = (Object.keys(state.color).length !== 0) ? `/color-${Object.keys(state.color).join('-')}` : ''
        const formatString = (Object.keys(state.format).length !== 0) ? `/format-${Object.keys(state.format).join('-')}` : ''
        state.pathname = `/catalog${brightnessString}${colorString}${formatString}`
    },
    removeFormat: (state, action:PayloadAction<string>) => {
        delete state.format[action.payload]
        const brightnessString = (Object.keys(state.brightness).length !== 0) ? `/brightness-${Object.keys(state.brightness).join('-')}` : ''
        const colorString = (Object.keys(state.color).length !== 0) ? `/color-${Object.keys(state.color).join('-')}` : ''
        const formatString = (Object.keys(state.format).length !== 0) ? `/format-${Object.keys(state.format).join('-')}` : ''
        state.pathname = `/catalog${brightnessString}${colorString}${formatString}`
    },
    removeFilter: (state) => {
        state.brightness={}
        state.color={}
        state.format={}
        state.pathname = '/catalog'
    }
  },
})

export const { addBrightness, addColor,addFormat,removeBrightness, removeColor,removeFormat,removeFilter } = filterSlice.actions

export default filterSlice.reducer