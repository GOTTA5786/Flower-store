
import styles from './SliderContent.module.css'
import { flowers } from '@/hardCode/flowers.js'
import SliderContentItem from '../SliderContentItem/SliderContentItem'
import { useAppDispatch } from '@/hooks/hooks'
import { setDots } from '@/store/sliderSlice'

export default function SliderContent() {
  const dotsAmount = Math.floor(flowers.length/3)
  const dispatch = useAppDispatch()

  dispatch(setDots(dotsAmount))

  
  return (
    <div className={ styles.container }>
      {flowers.map(item => {
        return <SliderContentItem key = { item.flower_id }prop={ item }></SliderContentItem>
      })}
    </div>
  )
}
