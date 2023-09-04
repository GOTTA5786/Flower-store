import styles from './layout.module.css'
import Image from 'next/image'
import leftFlower from '@/public/Catalog-flower1.png'
import rightFlower from '@/public/Catalog-flower2.png'
import CatalogPuprle from '@/components/EffectComponents/CatalogPurple/CatalogPuprle'
import CatalogBlue from '@/components/EffectComponents/CatalogBlue/CatalogBlue'
import DefaultHeader from '@/components/DefaultHeader/DefaultHeader'
import CatalogWithCategories from '@/components/CatalogPageComponents/CatalogWithCategories/CatalogWithCategories'
import ProviderWrapper from '@/components/ProviderWrapper/ProviderWrapper'
import CatalogFilter from '@/components/CatalogPageComponents/CatalogFilter/CatalogFilter'


interface IProp{
    children:React.ReactNode
}
const purpleCounter = Array.from({length: 4}, (_, index) => index + 1);
export default function layout({ children }:IProp) {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <Image
            className={styles.leftFlower}
            src = {leftFlower}
            width = {1073}
            height ={717}
            alt = 'default'/>
        <Image
            className={styles.rightFlower}
            src = {rightFlower}
            width = {1573}
            height ={1317}
            alt = 'default'/>
        {purpleCounter.map(index => {return <CatalogPuprle key={index} position={index}/>})}
        <DefaultHeader/>
      </div>
      <div className={styles.content}>
        <CatalogWithCategories/>
        <div className={styles.contentDisplay}>
            <ProviderWrapper><CatalogFilter/></ProviderWrapper>
            <div>{ children }</div>
        </div>
      </div>
    </div>
  )
}