import styles from './page.module.css'
import Image from 'next/image'
import leftFlower from '@/public/Catalog-flower1.png'
import rightFlower from '@/public/Catalog-flower2.png'
import CatalogPuprle from '@/components/EffectComponents/CatalogPurple/CatalogPuprle'
import CatalogBlue from '@/components/EffectComponents/CatalogBlue/CatalogBlue'
import CatalogWithCategories from '@/components/CatalogPageComponents/CatalogWithCategories/CatalogWithCategories'
import DefaultHeader from '@/components/DefaultHeader/DefaultHeader'


export default function Catalog() {
  return (
    <div className={styles.container}>
      <Image
          className={styles.leftFlower}
          src = {leftFlower}
          width = {1073}
          height ={717}
          alt = 'default'/>
      <Image
          className={styles.rightFlower}
          src = {rightFlower}
          width = {1073}
          height ={717}
          alt = 'default'/>
      <CatalogPuprle position={1}/>
      <CatalogPuprle position={2}/>
      <CatalogPuprle position={3}/>
      <CatalogPuprle position={4}/>
      <CatalogBlue position={1}/>
      {/* <CatalogBlue position={2}/>
      <CatalogBlue position={3}/> */}
      <div className={styles.content}>
        <DefaultHeader/>
        <CatalogWithCategories/>
        <p style={{color: "red"}}>AAAA</p>
      </div>
    </div>
  )
}
