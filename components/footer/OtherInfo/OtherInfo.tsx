import { FaSquareWhatsapp,FaSquarePhone,FaInstagram } from "react-icons/fa6";
import styles from "./OtherInfo.module.css";
import { oswaldo } from '@/Fonts/fonts'

export default function OtherInfo() {
  return (
    <div> 
        <div>
            <p className={styles.name + " " + oswaldo.className}>zakaz@loverflower.by</p>
            <p className={styles.description + " " + oswaldo.className}>Доставка 24/7 по договоренности с оператором</p>
        </div>
        <div>
            <p className={styles.name + " " + oswaldo.className}>ул. Тимирязева 69</p>
            <p className={styles.description + " " + oswaldo.className}>10:00 до 21:00 без выходных</p>
        </div>
        <div>
            <p className={styles.name + " " + oswaldo.className}>+7-888-888-88-88</p>
            <p className={styles.description + " " + oswaldo.className}>прием звонков круглосуточно</p>
        </div>
        <div className={styles.icons}>
            <div className={styles.icon}><FaInstagram/></div>
            <div className={styles.icon}><FaSquareWhatsapp/></div>
            <div className={styles.icon}><FaSquarePhone/></div>
        </div>
    </div>
  )
}
