import Image from 'next/image'
import styles from './page.module.css'
import MainFlower1 from '@/public/Main-flower1.png' 
import { cormorant, oswaldo, arizonia } from '@/fonts/fonts'
import MainCatalogContainer from '@/components/MainCatalogContainer/MainCatalogContainer'
import PopularContainer from '@/components/PopularContainer/PopularContainer'
import HowToOrderContainer from '@/components/HowToOrderContainer/HowToOrderContainer'
import DefaultHeader from '@/components/DefaultHeader/DefaultHeader'
import { IFlower } from '@/components/CatalogPageComponents/FlowerItem/FlowerItem'
import { sql } from '@vercel/postgres'

export default async function Home() {
  function guardIFlover (value:unknown):value is IFlower{
    if ((value as IFlower).flower_id !== undefined){
      return true
    }
    return false
  }
  
  const fetchFlowers = async():Promise<IFlower[]> => {
    const { rows } = await sql`SELECT * FROM flowers LIMIT 9`;

    if(rows.length!=0){return rows as Array<IFlower>}

    return []
  }

  
  let data:Array<IFlower> = []
  const response = await fetchFlowers()
  if (response.length !== 0){response.map(flower => {if (guardIFlover(flower)){data.push(flower)}})}

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
          />
          <div className={styles.containerWithShadow}></div>
        </div>
        <div className={styles.purpleEffect}></div>
        <div className={styles.blueEffect}></div> 
        <p className={styles.bgTextLF + " " + arizonia.className}>lover flower</p>
      </div>
      <MainCatalogContainer/>
      <PopularContainer flowers={data}/>
      <HowToOrderContainer/>
    </div>
  )
}
