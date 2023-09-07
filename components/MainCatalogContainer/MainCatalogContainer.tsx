import styles from './MainCatalogContainer.module.css'
import { cormorant,oswaldo } from '@/fonts/fonts'
import MainCatalogLandingFields from '../MainCatalogLandingFields/MainCatalogLandingFields'
import  { firstCatalog,secondCatalog,thirdCatalog } from '@/hardCode/catalogs.js'




export default function MainCatalogContainer() {
  return (
    <div className={styles.containerCatalog}>
        <h2 className={styles.CatalogWord + " " + cormorant.className}>КАТАЛОГ</h2>
        <p className={styles.CatalogText1 + " " + oswaldo.className}>У нас самый большой выбор цветов, букетов, открыток и подарков.
Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас проконсультирует и поможет определиться с выбором</p>
        <p className={styles.CatalogText2 + " " + oswaldo.className}> Ознакомьтесь с нашими разделами каталога</p>
        <div className={styles.container1}><MainCatalogLandingFields prop={firstCatalog} key={1}></MainCatalogLandingFields></div>
        <div className={styles.container2}><MainCatalogLandingFields prop={secondCatalog} key={2}></MainCatalogLandingFields></div>
        <div className={styles.container3}><MainCatalogLandingFields prop={thirdCatalog} key={3}></MainCatalogLandingFields></div>
        <div className={styles.blueEffect}></div>
        <div className={styles.purpleEffect}></div>
    </div>
  )
}
