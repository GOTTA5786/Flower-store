import styles from "./NavLinks.module.css";
import { oswaldo } from '@/Fonts/fonts'

export default function NavLinks() {
  return (
    <div className={styles.container + " " + oswaldo.className}>
        <p>доставка и оплата</p>
        <p>о нас</p>
        <p>FAQ</p>
        <p>контакты</p>
        <p>для корпоративных клиентов</p>
    </div>
  )
}
