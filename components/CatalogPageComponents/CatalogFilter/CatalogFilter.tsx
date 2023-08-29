'use client'
import { oswaldo } from '@/fonts/fonts'
import CatalogPriceSlider from '../CatalogPriceSlider/CatalogPriceSlider'
import styles from './CatalogFilter.module.css'
import { useRouter,usePathname } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { addBrightness,addColor,addFormat,removeBrightness,removeColor,removeFormat,removeFilter } from '@/store/filterSlice'
import { ChangeEvent, useEffect, useLayoutEffect } from 'react'
import RemoveFilterBtn from '@/components/RemoveFilterBtn/RemoveFilterBtn'

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
    const dispatch = useAppDispatch()
    const currentPath = usePathname()

    const router = useRouter()
    const pathname = useAppSelector(state => state.filter.pathname)
    const brightness = useAppSelector(state => state.filter.brightness)
    const color = useAppSelector(state => state.filter.color)
    const format = useAppSelector(state => state.filter.format)
    
    
    function setInitialPath(string:string){
        if (string.includes('brightness')){
            console.log(string);
            string.replace('brightness-','').split('-').map(item => {dispatch(addBrightness(item))})
        }
        else if (string.includes('color')){
            string.replace('color-','').split('-').map(item => {dispatch(addColor(item))})
        }
        else if (string.includes('format')){
            string.replace('format-','').split('-').map(item => {dispatch(addFormat(item))})
        }
    }


    useLayoutEffect(() => {
        currentPath.replace('/catalog','').split('/').map(item => {setInitialPath(item) })
    }, [])
    
    useEffect(() => {     
        if (pathname){
                router.push(pathname)
            }
        
    }, [pathname])
    
    useEffect(() => {
        if (currentPath === '/catalog'){
            dispatch(removeFilter())
        }
        
    }, [currentPath])
    

    function handleBrightness(e:ChangeEvent<HTMLInputElement>):void{
        if (e.target.checked){
            dispatch(addBrightness(e.target.name))
        }
        else{
            dispatch(removeBrightness(e.target.name))
        }
    }
    function handleColor(e:ChangeEvent<HTMLInputElement>):void{
        if (e.target.checked){
            dispatch(addColor(e.target.name))
        }
        else{
            dispatch(removeColor(e.target.name))
        }
        
    }
    function handleFormat(e:ChangeEvent<HTMLInputElement>):void{
        if (e.target.checked){
            dispatch(addFormat(e.target.name))
        }
        else{
            dispatch(removeFormat(e.target.name))
        }
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
        <div className={styles.removeBtnContainer}><RemoveFilterBtn/></div>
    </div>
    )
}
