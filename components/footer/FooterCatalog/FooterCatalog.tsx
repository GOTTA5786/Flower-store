import styles from "./FooterCatalog.module.css";
import { oswaldo } from '@/fonts/fonts'

export default function FooterCatalog() {
  return (
    <div>
        <p className={styles.name + " " + oswaldo.className}>Каталог</p>
        <ul className={styles.list + " " + oswaldo.className}>
            <li>Популярное</li>
            <li>сухоцветы</li>
            <li>букеты роз</li>
            <li>композиции из цветов</li>
            <li>индивидуальный букет</li>
            <li>букет на праздник</li>
            <li>упаковка подарков</li>
            <li>шары</li>
            <li>открытки</li>
            <li>конверты</li>
        </ul>
    </div>
  )
}
