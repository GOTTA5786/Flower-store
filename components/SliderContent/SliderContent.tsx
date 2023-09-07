
import styles from './SliderContent.module.css'
import SliderContentItem from '../SliderContentItem/SliderContentItem'
import { useAppDispatch } from '@/hooks/hooks'
import { setDots } from '@/store/sliderSlice'
import { IFlowerArray } from '../PopularItemsSlider/PopularItemsSlider'



export default function SliderContent(flowers:IFlowerArray) {
  const dotsAmount = Math.floor(flowers.flowers.length/3)
  
  const dispatch = useAppDispatch()

  dispatch(setDots(dotsAmount))
  
  return (
    <div className={ styles.container }>
      {flowers.flowers.map(item => {
        return <SliderContentItem key = {item.flower_id} {...item}></SliderContentItem>
      })}
    </div>
  )
}
