import { steps } from "./StepsInfo"
import styles from './StepsHelper.module.css'
import { oswaldo } from '@/Fonts/fonts'


export default function StepsHelper() {
  return (
    <div className={styles.stepsContainer}>
        {steps.map(item => {
            return(
            <div key={item.id}>
                <p className={styles.step + ' ' + oswaldo.className}>{item.id} ШАГ</p>
                <p className={styles.description + ' ' + oswaldo.className}>{item.description}</p>
            </div>
            )
        })}
    </div>
  )
}
