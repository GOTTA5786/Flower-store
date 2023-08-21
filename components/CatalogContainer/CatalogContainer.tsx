import styles from './CatalogContainer.module.css'
import { cormorant,oswaldo } from '@/Fonts/fonts'
import CatalogLandingFields from '../CatalogLandingFields/CatalogLandingFields'
import  { firstCatalog,secondCatalog,thirdCatalog } from '@/HardCode/Catalogs'




export default function CatalogContainer() {
  return (
    <div className={styles.containerCatalog}>
        <h2 className={styles.CatalogWord + " " + cormorant.className}>КАТАЛОГ</h2>
        <p className={styles.CatalogText1 + " " + oswaldo.className}>У нас самый большой выбор цветов, букетов, открыток и подарков.
Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас проконсультирует и поможет определиться с выбором</p>
        <p className={styles.CatalogText2 + " " + oswaldo.className}> Ознакомьтесь с нашими разделами каталога</p>
        <div className={styles.container1}><CatalogLandingFields prop={firstCatalog}></CatalogLandingFields></div>
        <div className={styles.container2}><CatalogLandingFields prop={secondCatalog}></CatalogLandingFields></div>
        <div className={styles.container3}><CatalogLandingFields prop={thirdCatalog}></CatalogLandingFields></div>
        <div className={styles.blueEffect}></div>
        <div className={styles.purpleEffect}></div>
    </div>
  )
}
