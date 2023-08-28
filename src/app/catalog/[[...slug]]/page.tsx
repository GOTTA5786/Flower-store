import styles from './page.module.css'
import ProviderWrapper from '@/components/ProviderWrapper/ProviderWrapper'
import { flowers } from '@/hardCode/flowers'
import FlowerItem from '@/components/CatalogPageComponents/FlowerItem/FlowerItem'

interface IProp{
  params:{ slug: string }
  props:object
}

export default function Catalog( {params,props} :IProp ) {
  console.log(params.slug,'slug');
  

  return (
    <div className={styles.container}>
      <ProviderWrapper>
        {flowers.map(item => {return <FlowerItem key={item.flower_id} prop={item} />})}
      </ProviderWrapper>
    </div>
  )
}
