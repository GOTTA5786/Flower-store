import React from 'react'
import Image from 'next/image'
import styles from './SliderContentItem.module.css'
import { oswaldo } from '@/Fonts/fonts'

interface Props{
    prop:{flower_id:number;
        title:string;
        price:string;
        sale:boolean;
        saleprice:string;
        description:string;
        pathtoimg:string;}
}


export default function SliderContentItem({ prop }:Props) {
    
  return (
    <div>
        <Image className={styles.picture} alt = 'default' src = {`/Items_images/${prop.pathtoimg}.png`} width={350} height={450}></Image>
        <p className={styles.title + " " + oswaldo.className}>{prop.title}</p>
        <p className={styles.price + " " + oswaldo.className}>{prop.price}</p>
    </div>
  )
}
