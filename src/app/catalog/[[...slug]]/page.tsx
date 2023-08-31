import styles from './page.module.css'
import ProviderWrapper from '@/components/ProviderWrapper/ProviderWrapper'
import { flowers } from '@/hardCode/flowers'
import FlowerItem from '@/components/CatalogPageComponents/FlowerItem/FlowerItem'

interface IProp{
  params?:{ slug?: string }
  searchParams?: {minPrice?:string,maxPrice?:string}
}

export default function Catalog( {params,searchParams} :IProp ) {
  
  

  return (
    <div className={styles.container}>
      <ProviderWrapper>
        {flowers.map(item => {return <FlowerItem key={item.flower_id} prop={item} />})}
      </ProviderWrapper>
    </div>
  )
}
