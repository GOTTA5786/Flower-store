'use client'
import { oswaldo } from '@/fonts/fonts'
import styles from './CartMenu.module.css'
import { FaXmark } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { clearCart, disableCart } from '@/store/cartSlice';
import Image from 'next/image';
import CartItemQuantityBtn from '../CartItemQuantityBtn/CartItemQuantityBtn';
import { ReactNode, useEffect, useState } from 'react';
import DeleteFromCartBtn from '../DeleteFromCartBtn/DeleteFromCartBtn';
import Link from 'next/link';


export default function CartMenu() {
    const isActive = useAppSelector(state => state.cart.isActive)
    const items = useAppSelector(state => state.cart.items)
    const totalPrice = useAppSelector(state => state.cart.totalPrice)
    const dispatch = useAppDispatch()
    const [isOrdered, setIsOrdered] = useState<boolean>(false)
    let itemsArray:Array<ReactNode> = []

    useEffect(() => {
        setIsOrdered(false)
    }, [isActive])

    items.forEach((value) => itemsArray.push(
                    <div key={value.flower_id} className={styles.oneItemBlock}>
                        <div className={styles.leftBlock}>
                            <div className={styles.itemImg}>
                                <Link href = {`/product/${value.flower_id}`} onClick={e => dispatch(disableCart())}>
                                    <Image
                                        src={`/Items_images/${value.pathtoimg}.png`}
                                        fill={true}
                                        alt='default'
                                    />
                                </Link>
                            </div>
                            <div className={styles.description}>
                                <div className={styles.descriptionTop}>
                                    <Link href = {`/product/${value.flower_id}`} 
                                    className={styles.descriptionTitle} 
                                    onClick={e => dispatch(disableCart())}>{value.title}</Link>
                                    <span className={styles.descriptionPrice}>{value.price} ₽ x {value.quantity}</span>
                                </div>
                                <CartItemQuantityBtn quantity={value.quantity} flower_id={value.flower_id}/>
                            </div>
                        </div>    
                        <div className={styles.rightBlock}>
                            <span className={styles.itemTotalPrice}>{(value.price * value.quantity).toFixed(2)} ₽</span>
                            <DeleteFromCartBtn flower_id={value.flower_id}/>
                        </div>
                    </div>))

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''} ${oswaldo.className}`} onClick={e => {dispatch(disableCart())}}>
        <div className={`${styles.content} ${isActive ? styles.active : ''}`} onClick = {e => e.stopPropagation()}>
            <div>
                <div className={styles.cartHeader}>
                    <p>Ваша корзина</p>
                    <FaXmark className={styles.xmark} onClick={e => {dispatch(disableCart())}}/>
                </div>
                <div className={styles.itemsBlock}>
                    {(items.size === 0 ) ? <p className={styles.emptyCart}>Ваша корзина пуста</p> : itemsArray}
                </div>
                <div className={styles.footer}>
                    <span>предварительный итог : {totalPrice} руб.</span>
                    {(isOrdered) ? 
                    <div className={styles.thxForOrder}>спасибо за покупку!</div>:
                    <div className={styles.orderBtn} onClick={e => {setIsOrdered(true); dispatch(clearCart())}}>оформить заказ</div>}
                </div>
            </div>
        </div>
    </div>
  )
}
