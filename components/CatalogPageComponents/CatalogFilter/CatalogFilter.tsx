'use client'
import { oswaldo } from '@/fonts/fonts'
import CatalogPriceSlider from '../CatalogPriceSlider/CatalogPriceSlider'
import styles from './CatalogFilter.module.css'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { addBrightness,addColor,addFormat,removeBrightness,removeColor,removeFormat,setPathname } from '@/store/filterSlice'
import { ChangeEvent, useEffect } from 'react'

interface IUrlParams {
    brightness:string,
    color:string,
    format:string,
    price:string,
}
const COLORS: Record<string,string> = {
    white: 'белый',
    yellow: 'желтый',
    green:'зеленый',
    red:'красный',
    orange:'оранжевый',
    pink:'розовый',
    blue:'синий',
}
const BRIGHTNESS: Record<string,string> = {
    delicate:'нежные',
    bright:'яркие',
}
const FORMAT: Record<string,string> ={
    bouquet: 'букет',
    vase: 'в вазе',
    envelope: 'в конверте',
    basket: 'в корзине',
    hatbox: 'в шляпной коробке',
    crate: 'в ящике',

}
export default function CatalogFilter() {
    
    const router = useRouter()
    const dispatch = useAppDispatch()
    const pathname = useAppSelector(state => state.filter.pathname)
    const brightness = useAppSelector(state => state.filter.brightness)
    const color = useAppSelector(state => state.filter.color)
    const format = useAppSelector(state => state.filter.format)
    
    useEffect(() => {
        router.push(pathname)
    }, [brightness,color,format])
    
    function handleBrightness(e:ChangeEvent<HTMLInputElement>):void{
        if (e.target.checked){
            dispatch(addBrightness(e.target.name))
        }
        else{
            dispatch(removeBrightness(e.target.name))
        }
        dispatch(setPathname())
    }
    function handleColor(e:ChangeEvent<HTMLInputElement>):void{
        if (e.target.checked){
            dispatch(addColor(e.target.name))
        }
        else{
            dispatch(removeColor(e.target.name))
        }
        dispatch(setPathname())
        
    }
    function handleFormat(e:ChangeEvent<HTMLInputElement>):void{
        if (e.target.checked){
            dispatch(addFormat(e.target.name))
        }
        else{
            dispatch(removeFormat(e.target.name))
        }
        dispatch(setPathname())
    }
    
    return (
    <div className={styles.container}>
        <div>
            <p className={styles.main + ' ' + oswaldo.className}>по свету</p>
            <ul className={styles.ul + ' ' + oswaldo.className}>
                {Object.keys(BRIGHTNESS).map((key) => {return <li key = {key}><label key = {key}><input key = {key} type={'checkbox'} name={key} checked={key in brightness ? true : false} onChange={e => handleBrightness(e)}/><span className={styles.customCheckbox}/>{BRIGHTNESS[key]}</label></li>})}
            </ul>
        </div>
        <div>
            <p className={styles.main + ' ' + oswaldo.className}>по цвету</p>
            <ul className={styles.ul + ' ' + oswaldo.className}>
                {Object.keys(COLORS).map((key) => {return <li key = {key}><label key = {key}><input key = {key} type={'checkbox'} name={key} checked={key in color ? true : false} onChange={e => handleColor(e)}/><span className={styles.customCheckbox}/>{COLORS[key]}</label></li>})}
            </ul>
        </div>
        <div>
            <p className={styles.main + ' ' + oswaldo.className}>по формату</p>
            <ul className={styles.ul + ' ' + oswaldo.className}>
                {Object.keys(FORMAT).map((key) => {return <li key = {key}><label key = {key}><input key = {key} type={'checkbox'} name={key} checked={key in format ? true : false} onChange={e => handleFormat(e)}/><span className={styles.customCheckbox}/>{FORMAT[key]}</label></li>})}
            </ul>
        </div>
        <div>
            <p className={styles.main + ' ' + oswaldo.className}>Стоимость</p>
            <CatalogPriceSlider/>
        </div>
    </div>
    )
}
