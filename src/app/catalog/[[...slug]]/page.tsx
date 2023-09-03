import styles from './page.module.css'
import ProviderWrapper from '@/components/ProviderWrapper/ProviderWrapper'
import FlowerItem, { IFlower } from '@/components/CatalogPageComponents/FlowerItem/FlowerItem'
import { QueryResultRow, sql } from "@vercel/postgres";

interface IProp{
  params?:{ slug?: string[] }
  searchParams?: {minPrice?:string,maxPrice?:string,page?:string}
}


export default async function Catalog( {params,searchParams} :IProp ) {
  let queryString:string = ''
  let queryStringArray:string[] = []
  let queryParamsArray:string[] = []
  let queryBrightnessStringArray:string[] = []
  let queryColorStringArray:string[] = []
  let queryFormatStringArray:string[] = []
  let queryPriceStringArray:string[] = []
  let counter:number = 1

  function setSlugParams(string:string){
    if (string.includes('brightness-')){
      string.replace('brightness-','')
      .split('-')
      .map(word => {queryParamsArray.push(word);queryBrightnessStringArray.push(`brightness = $${counter}`);counter++})
    }
    else if (string.includes('color')){
      string.replace('color-','')
      .split('-')
      .map(word => {queryParamsArray.push(word);queryColorStringArray.push(`color = $${counter}`);counter++})
    }
    else if (string.includes('format')){
      string.replace('format-','')
      .split('-')
      .map(word => {queryParamsArray.push(word);queryFormatStringArray.push(`format = $${counter}`);counter++})
    }
  }


  if (params?.slug){
    params?.slug.map(string => setSlugParams(string))
  }

  if (searchParams?.minPrice && searchParams?.maxPrice){
    queryParamsArray.push(searchParams.minPrice.replace(/[^0-9]/g,""),searchParams.maxPrice.replace(/[^0-9]/g,""))
    queryPriceStringArray.push(`price >= $${counter}`)
    counter++
    queryPriceStringArray.push(`price <= $${counter}`)
  }

  if (queryBrightnessStringArray.length != 0){
    queryStringArray.push(queryBrightnessStringArray.join(' OR '))
  }

  if (queryColorStringArray.length != 0){
    queryStringArray.push(queryColorStringArray.join(' OR '))
  }
  
  if (queryFormatStringArray.length != 0){
    queryStringArray.push(queryFormatStringArray.join(' OR '))
  }

  if (queryPriceStringArray.length != 0){
    queryStringArray.push(queryPriceStringArray.join(' AND '))
  }

  if (queryStringArray.length != 0){
    queryString = 'SELECT * FROM flowers WHERE '+queryStringArray.join(' AND ')
  }
  

  const isResFlowers = (items: Array<QueryResultRow>): items is Array<IFlower> => {
    return (items[0] as IFlower).flower_id !== undefined;
  }
  const fetchFlowers = async(queryString?:string,queryParamsArray?:string[]):Promise<IFlower[]> => {
    if (queryString && queryParamsArray){
      const { rows } = await sql.query(queryString,queryParamsArray);
      
      if(rows.length!=0){return rows as Array<IFlower>}
      console.log('incorrect filter');
      
      return [];
    }
    const { rows } = await sql`SELECT * FROM flowers`;
    if(rows.length!=0){return rows as Array<IFlower>}
    console.log('flowers not found');
    return []
    
  }
  const data = await fetchFlowers(queryString,queryParamsArray)

  return (
    <div className={styles.container}>
      <ProviderWrapper>
        {data?.map(item => {return <FlowerItem key={item.flower_id} {...item}/>})}
      </ProviderWrapper>
    </div>
  )
}
