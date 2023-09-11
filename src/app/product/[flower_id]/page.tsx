import AddToCartBtn from '@/components/AddToCartBtn/AddToCartBtn';
import { IFlower } from '@/components/CatalogPageComponents/FlowerItem/FlowerItem';
import CatalogPuprle from '@/components/EffectComponents/CatalogPurple/CatalogPuprle';
import Header from '@/components/Header/Header'
import ProviderWrapper from '@/components/ProviderWrapper/ProviderWrapper';
import { cormorant, oswaldo } from '@/fonts/fonts';
import { sql } from '@vercel/postgres';
import Image from 'next/image';
import styles from './page.module.css'

interface IFlower_id {
  flower_id:string
}

export async function generateStaticParams ():Promise<IFlower_id[]> {
  const { rows } = await sql`SELECT flower_id FROM flowers`;
  if (rows.length!=0){return rows.map(item => ({flower_id: `${item.flower_id}`}))}
  return []
}

function guardIFlover (value:unknown):value is IFlower{
  if ((value as IFlower).flower_id !== undefined){
    return true
  }
  return false
}

const fetchFlower = async(queryParams:number):Promise<IFlower[]> => {
  if (queryParams){
    const { rows } = await sql`SELECT * FROM flowers WHERE flower_id = ${queryParams}`;
  if(rows.length!=0){return rows as Array<IFlower>}
  }
  return []
}

const purpleCounter = Array.from({length: 3}, (_, index) => index + 1);

export default async function page({ params }:{ params:{flower_id:string}}) {
  let data: IFlower | undefined = undefined
  const queryParams = Number(params?.flower_id)

  if (queryParams !== 0){
    const response = await fetchFlower(queryParams)
    if (response.length != 0) { if (guardIFlover(response[0])){data = response[0]}}
  }
  if (data !== undefined){
  return (
    <div className={styles.container + ' ' + oswaldo.className}>
      <Header isFixed={true}/>
      {purpleCounter.map(index => {return <CatalogPuprle key={index} position={index}/>})}
      <div className={styles.content}>
        <div className={styles.itemImage}>
          <Image className={styles.picture}
            alt = 'default'
            src = {`/Items_images/${data.pathtoimg}.png`}
            fill={true}></Image>
        </div>
        <div className={styles.info}>
          <p className={styles.title + ' ' + cormorant.className}>{data.title}</p>
          {data.sale ? <div className={styles.price}><p className={styles.newPrice}>{data.saleprice} ₽</p><p className={styles.oldPrice}>{data.price} ₽</p></div>
            : <p className={styles.newPrice}>{data.price} ₽</p>}
          <div className={styles.descriptionBlock}>
            <span className={styles.description}><span className={styles.descriptionTag}>Описание: </span>{data.description}</span>
          </div>
          <div className={styles.toCartContainer}>
            <ProviderWrapper><AddToCartBtn {...data}/></ProviderWrapper>
          </div>
        </div>
      </div>
    </div>
  )
  }
  return (
      <div className={styles.container + ' ' + oswaldo.className}>
        <Header isFixed={true}/>
        {purpleCounter.map(index => {return <CatalogPuprle key={index} position={index}/>})}
        <div className={styles.notFoundContainer}>
          <p className={styles.notFound}>По вашему запросу ничего не найдено</p>
        </div>
      </div>
  )
}