import Image from 'next/image'
import styles from './page.module.css'
import MainFlover1 from '@/public/Main-flover1.png' 
import { cormotant,oswaldo,arizonia } from '@/Fonts/fonts'

export default function Home() {
  return (
    <>
      <div className={styles.container1}>
        <p className={styles.storeName1 + " " + cormotant.className}>lover</p>
        <p className={styles.storeName2 + " " + cormotant.className}>flower</p>
        <p className={styles.slogan + " " + oswaldo.className}>Создаём для тех, кто ценит свежесть и изящество цветка</p>
        <Image src = {MainFlover1}
          alt = 'default'
          className={styles.MainFlover1}
          layout='fill'
          objectFit='cover'></Image>
        <div className={styles.purpleEffect}></div>
        <div className={styles.blueEffect}></div> 
        <div className={styles.containerWithShadow}></div>
        <p className={styles.bgTextLF + " " + arizonia.className}>lover flower</p>
      </div>
      
    </>
  )
}
