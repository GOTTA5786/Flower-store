import Image from 'next/image'
import styles from './page.module.css'
import MainFlower1 from '@/public/Main-flower1.png' 
import { cormorant, oswaldo, arizonia } from '@/fonts/fonts'
import MainCatalogContainer from '@/components/MainCatalogContainer/MainCatalogContainer'
import PopularContainer from '@/components/PopularContainer/PopularContainer'
import HowToOrderContainer from '@/components/HowToOrderContainer/HowToOrderContainer'
import DefaultHeader from '@/components/DefaultHeader/DefaultHeader'

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container1}>
        <DefaultHeader/>
        <h1 className={styles.storeName1 + " " + cormorant.className}>lover</h1>
        <h1 className={styles.storeName2 + " " + cormorant.className}>flower</h1>
        <p className={styles.slogan + " " + oswaldo.className}>Создаём для тех, кто ценит свежесть и изящество цветка</p>
        <div className={styles.bgWithShadow}>
        <Image src = {MainFlower1}
          alt = 'default'
          className={styles.MainFlover1}
          ></Image>
          <div className={styles.containerWithShadow}></div>
        </div>
        <div className={styles.purpleEffect}></div>
        <div className={styles.blueEffect}></div> 
        <p className={styles.bgTextLF + " " + arizonia.className}>lover flower</p>
      </div>
      <MainCatalogContainer></MainCatalogContainer>
      <PopularContainer></PopularContainer>
      <HowToOrderContainer></HowToOrderContainer>
    </div>
  )
}
