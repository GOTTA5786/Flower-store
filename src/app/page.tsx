import Image from 'next/image'
import styles from './page.module.css'
import MainFlover1 from '@/public/Main-flover1.png' 
import { cormorant, oswaldo, arizonia } from '@/Fonts/fonts'
import CatalogContainer from '@/components/CatalogContainer/CatalogContainer'
import PopularContainer from '@/components/PopularContainer/PopularContainer'
import HowToOrderContainer from '@/components/HowToOrderContainer/HowToOrderContainer'

export default function Home() {
  return (
    <>
      <div className={styles.container1}>
        <h1 className={styles.storeName1 + " " + cormorant.className}>lover</h1>
        <h1 className={styles.storeName2 + " " + cormorant.className}>flower</h1>
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
      <CatalogContainer></CatalogContainer>
      <PopularContainer></PopularContainer>
      <HowToOrderContainer></HowToOrderContainer>
    </>
  )
}
