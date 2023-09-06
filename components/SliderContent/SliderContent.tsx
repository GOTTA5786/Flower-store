
import styles from './SliderContent.module.css'
import SliderContentItem from '../SliderContentItem/SliderContentItem'
import { useAppDispatch } from '@/hooks/hooks'
import { setDots } from '@/store/sliderSlice'
import { sql } from '@vercel/postgres'
import { IFlower } from '../CatalogPageComponents/FlowerItem/FlowerItem'

export default async function SliderContent() {
  function guardIFlover (value:unknown):value is IFlower{
    if ((value as IFlower).flower_id !== undefined){
      return true
    }
    return false
  }
  
  const fetchFlowers = async():Promise<IFlower[]> => {
    const { rows } = await sql`SELECT * FROM flowers  LIMIT 9`;

    if(rows.length!=0){return rows as Array<IFlower>}

    return []
  }

  const response = await fetchFlowers()
  let data:Array<IFlower> = []
  if (response.length !== 0){response.map(flower => {if (guardIFlover(flower)){data.push(flower)}})}

  const dotsAmount = Math.floor(data.length/3)
  const dispatch = useAppDispatch()

  dispatch(setDots(dotsAmount))

  
  return (
    <div className={ styles.container }>
      {data.map(item => {
        return <SliderContentItem key = { item.flower_id } {...item}></SliderContentItem>
      })}
    </div>
  )
}
