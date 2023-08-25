'use client'
import Image from 'next/image'
import styles from './SliderContentItem.module.css'
import { oswaldo } from '@/fonts/fonts'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn'
import { useAppSelector } from '@/hooks/hooks'

interface Props{
    key:number,
    prop:{flower_id:number;
        title:string;
        price:number;
        sale:boolean;
        saleprice:number;
        description:string;
        pathtoimg:string;}
}

export default function SliderContentItem({ prop }:Props) {

  const position = useAppSelector(state => state.slider.value)

  return (
    <div className={styles.container} style = {{ transform: `translateX(${position}px)` }}>
        <div className={styles.pictureContainer}>
          <Image className={styles.picture}
            alt = 'default'
            src = {`/Items_images/${prop.pathtoimg}.png`}
            width={350}
            height={450}></Image>
        </div>
        <p className={styles.title + " " + oswaldo.className}>{prop.title}</p>
        <p className={styles.price + " " + oswaldo.className}>{prop.price} ₽</p>
        <AddToCartBtn></AddToCartBtn>
    </div>
  )
}
