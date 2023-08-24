import styles from "./FooterBouquet.module.css";
import { oswaldo } from '@/Fonts/fonts'

export default function FooterBouquet() {
  return (
    <div>
        <p className={styles.name + " " + oswaldo.className}>Букеты</p>
        <ul className={styles.list + " " + oswaldo.className}>
            <li>для девушки</li>
            <li>для мужчины</li>
            <li>для жены</li>
            <li>для мамы</li>
            <li>для коллеги</li>
            <li>для начальника</li>
            <li>для дочки</li>
            <li>для детей</li>
            <li>для женщины</li>
        </ul>
    </div>
  )
}
