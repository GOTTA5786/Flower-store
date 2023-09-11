'use client'
import Image from 'next/image'
import styles from './SliderContentItem.module.css'
import { oswaldo } from '@/fonts/fonts'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn'
import { useAppSelector } from '@/hooks/hooks'
import { IFlower } from '../CatalogPageComponents/FlowerItem/FlowerItem'
import Link from 'next/link'


export default function SliderContentItem(prop:IFlower) {

  const position = useAppSelector(state => state.slider.value)

  return (
    <div className={styles.container} style = {{ transform: `translateX(${position}px)` }}>
        <div className={styles.pictureContainer}>
          <Link href={`/product/${prop.flower_id}`}>
            <Image className={styles.picture}
              alt = 'default'
              src = {`/Items_images/${prop.pathtoimg}.png`}
              width={350}
              height={450}></Image>
          </Link>
        </div>
        <Link href={`/product/${prop.flower_id}`} className={styles.title + " " + oswaldo.className}>{prop.title}</Link>
        <p className={styles.price + " " + oswaldo.className}>{prop.price} ₽</p>
        <AddToCartBtn {...prop}></AddToCartBtn>
    </div>
  )
}
