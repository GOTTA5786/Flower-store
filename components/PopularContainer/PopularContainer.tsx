
import styles from './PopularContainer.module.css'
import { cormorant, oswaldo } from '@/fonts/fonts'
import Image from 'next/image'
import PopularBg from '@/public/PopularBg.png'
import PopularItemsSlider, { IFlowerArray } from '../PopularItemsSlider/PopularItemsSlider'
import ProviderWrapper from '../ProviderWrapper/ProviderWrapper'
import PopularBlueSvg from '../EffectComponents/PopularBlue/PopularBlueSvg'
import PopularPurpleSvg from '../EffectComponents/PopularPurple/PopularPurpleSvg'


export default function PopularContainer( props :IFlowerArray) {

  return (
    <div className={styles.container}>
        <Image src = {PopularBg}
          alt = 'default'
          className={styles.PopularBg}></Image>
        <p className={styles.popularText + " " + cormorant.className}>Популярные</p>
        <p className={styles.popularText2 + " " + cormorant.className}>букеты</p>
        <p className={styles.popularText3 + " " + oswaldo.className}>Самые любимые композиции наших клиентов</p>
        <ProviderWrapper>
          <PopularItemsSlider flowers={ props.flowers }></PopularItemsSlider>
        </ProviderWrapper>
        <PopularBlueSvg></PopularBlueSvg>
        <PopularPurpleSvg></PopularPurpleSvg>
        
        
    </div>
  )
}
