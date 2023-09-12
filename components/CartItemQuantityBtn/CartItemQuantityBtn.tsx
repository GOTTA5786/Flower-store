'use client'

import { useAppDispatch } from '@/hooks/hooks'
import { decreaseQuantity, increaseQuantity, setQuantity } from '@/store/cartSlice'
import { FocusEvent, useEffect, useState } from 'react'
import styles from './CartItemQuantityBtn.module.css'
interface IQuantity{
    flower_id:number
    quantity:number
}
export default function CartItemQuantityBtn( { flower_id, quantity }:IQuantity) {
    const [inputValue, setInputValue] = useState<number | string>(quantity)
    const dispatch = useAppDispatch()

    
    useEffect(() => {
      setInputValue(quantity)
    }, [quantity])


    function handleBlur(e:FocusEvent<HTMLInputElement, Element>){
        if (e.target.value !== '') {
            dispatch(setQuantity({flower_id:flower_id,quantity:e.target.valueAsNumber}))
        }
    }

  return (
    <div className={styles.container}>
        <span className={styles.minus} onClick={e => dispatch(decreaseQuantity(flower_id))}>-</span>
        <input type={'number'} 
            className={styles.quantity}
            placeholder={`${quantity}`}
            value={inputValue} 
            onChange={e => (e.target.value === '0') ? setInputValue('1') : (+e.target.value >= 100) ? setInputValue('100') : setInputValue(e.target.value)} 
            onBlur={e => handleBlur(e)}/>
        <span className={styles.plus} onClick={e => dispatch(increaseQuantity(flower_id))}>+</span>
    </div>
  )
}
