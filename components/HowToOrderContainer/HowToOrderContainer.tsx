import styles from './HowToOrderContainer.module.css'
import HowToOrderFlower from '@/public/HowToOrderFlower.png'
import Image from 'next/image'
import StepsHelper from './StepsHelper/StepsHelper'
import { cormorant, arizonia } from '@/Fonts/fonts'
import PopularBlueSvg from '../EffectComponents/PopularBlue/PopularBlueSvg'

export default function HowToOrderContainer() {
  return (
    <div className={styles.container}>
        
        <p className={styles.headText+ " " + cormorant.className}>как сделать заказ</p>
        <div className={styles.contentContainer}>
            <Image className={styles.img}
                src = {HowToOrderFlower} 
                alt = 'default' 
                width={562} 
                height={845}></Image>
            <div className={styles.stepsContainer}>
                <div className={styles.topRectangle}></div>
                <div className={styles.rightStroke}></div>
                <StepsHelper></StepsHelper>
            </div>
        </div>
        <p className={styles.bgTextLF + " " + arizonia.className}>lover flower</p>
    </div>
  )
}
