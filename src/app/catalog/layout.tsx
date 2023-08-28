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
import Footer from '@/components/footer/Footer'


interface IProp{
    children:React.ReactNode
}
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
        <CatalogPuprle position={1}/>
        <CatalogPuprle position={2}/>
        <CatalogPuprle position={3}/>
        <CatalogPuprle position={4}/>
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