import styles from './PopularContainer.module.css'
import { cormorant, oswaldo } from '@/Fonts/fonts'
import Image from 'next/image'
import PopularBg from '@/public/PopularBg.png'
import PopularItems from '../PopularItems/PopularItems'


export default function PopularContainer() {
  return (
    <div className={styles.container}>
        <Image src = {PopularBg}
          alt = 'default'
          className={styles.PopularBg}></Image>
        <p className={styles.popularText + " " + cormorant.className}>Популярные</p>
        <p className={styles.popularText2 + " " + cormorant.className}>букеты</p>
        <p className={styles.popularText3 + " " + oswaldo.className}>Самые любимые композиции наших клиентов</p>
        <PopularItems></PopularItems>
        
    </div>
  )
}
