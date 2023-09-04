import styles from './page.module.css'
import ProviderWrapper from '@/components/ProviderWrapper/ProviderWrapper'
import FlowerItem, { IFlower } from '@/components/CatalogPageComponents/FlowerItem/FlowerItem'
import { sql } from "@vercel/postgres";
import Pagination from '@/components/CatalogPageComponents/Pagination/Pagination';

interface IProp{
  params?:{ slug?: string[] }
  searchParams?: {minPrice?:string,maxPrice?:string,page?:string}
}


export default async function Catalog( {params,searchParams} :IProp ) {
  let queryString:string = ''
  let countQuery:string = ''
  let queryStringArray:string[] = []
  let queryParamsArray:(string|number)[] = []
  let queryBrightnessStringArray:string[] = []
  let queryColorStringArray:string[] = []
  let queryFormatStringArray:string[] = []
  let queryPriceStringArray:string[] = []
  let counter:number = 1
  
  const pagesLimit:number = 6
  const currentPage:number = (searchParams?.page != undefined) ? Number(searchParams?.page) : 1

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

  const offset:number = pagesLimit*((searchParams?.page !== undefined)? Number(searchParams?.page)-1 : 0)
  

  if (params?.slug){
    params?.slug.map(string => setSlugParams(string))
  }

  if (searchParams?.minPrice && searchParams?.maxPrice){
    queryParamsArray.push(searchParams.minPrice.replace(/[^0-9]/g,""),searchParams.maxPrice.replace(/[^0-9]/g,""))
    queryPriceStringArray.push(`price >= $${counter}`)
    counter++
    queryPriceStringArray.push(`price <= $${counter}`)
    counter++
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
    queryString = 'SELECT * FROM flowers WHERE '+queryStringArray.join(' AND ')+` LIMIT ${pagesLimit}` + ` OFFSET $${counter}`
    countQuery = 'SELECT COUNT(*) FROM flowers WHERE '+queryStringArray.join(' AND ')
  }

  async function countFlowers (countString?:string,queryParamsArray?:(string|number)[]):Promise<number> {
    if (countString && queryParamsArray){
      const { rows } = await sql.query(countString,queryParamsArray);
      return rows[0].count;
    }
    const { rows } = await sql`SELECT COUNT(*) FROM flowers`;
      return rows[0].count;
  }

  const rowQuantity = await countFlowers(countQuery,queryParamsArray)

  const pages:number = (rowQuantity !== 0) ? Math.ceil(rowQuantity / pagesLimit) : 1

  queryParamsArray.push(offset)

  const fetchFlowers = async(queryString?:string,queryParamsArray?:(string|number)[]):Promise<IFlower[]> => {
    
    
    if (queryString && queryParamsArray){
      const { rows } = await sql.query(queryString,queryParamsArray);

      if(rows.length!=0){return rows as Array<IFlower>}

      console.log('incorrect filter');
      return [];
    }
    const quertWithoutFilter = `SELECT * FROM flowers  LIMIT ${pagesLimit} OFFSET $1`
    const { rows } = await sql.query(quertWithoutFilter,queryParamsArray);

    if(rows.length!=0){return rows as Array<IFlower>}
    console.log('flowers not found');
    return []
  }

  
  const data = await fetchFlowers(queryString,queryParamsArray)
  
  return (
    <div>
      <div className={styles.container}>
        {data?.map(item => {return <FlowerItem key={item.flower_id} {...item}/>})}
      </div>
      <div className={styles.paginationContainer}>
        <ProviderWrapper><Pagination currentPage={currentPage} pages={pages} searchParams={searchParams}/></ProviderWrapper>
      </div>
    </div>
  )
}
