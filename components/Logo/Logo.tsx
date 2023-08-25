import styles from './Logo.module.css'
import { cormorant } from '@/fonts/fonts'

export default function Logo() {
  return (
    <div className={styles.container}>
        <p className={styles.letterL + ' ' + cormorant.className}>L</p>
        <p className={styles.letterF + ' ' + cormorant.className}>F</p>
    </div>
  )
}
