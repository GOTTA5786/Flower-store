import styles from './Requisites.module.css'
import { cormorant, oswaldo, arizonia } from '@/fonts/fonts'

export default function Requisites() {
  return (
    <div className={styles.container}>
        <p className={styles.name + ' ' + oswaldo.className}>реквизиты</p>
        <p className={styles.description + ' ' + oswaldo.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit, architecto quis voluptate unde ut repellendus voluptates velit nesciunt molestiae itaque, consectetur ab eaque distinctio non in adipisci nostrum minus.</p>
    </div>
  )
}
