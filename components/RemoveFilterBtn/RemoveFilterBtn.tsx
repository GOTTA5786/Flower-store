import { oswaldo } from '@/fonts/fonts'
import { useAppDispatch } from '@/hooks/hooks'
import styles from './RemoveFilterBtn.module.css'
import { removeFilter } from '@/store/filterSlice'


export default function RemoveFilterBtn() {
    const dispatch = useAppDispatch()
  return (
    <div className={styles.container}>
        <p className={styles.buttonText + " " + oswaldo.className} onClick={() => dispatch(removeFilter())}>Сбросить фильтр</p>
    </div>
  )
}

