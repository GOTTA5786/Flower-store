import CategoryBtn from "../../CategoryBtn/CategoryBtn";
import { categories } from "@/hardCode/categories.js";
import styles from './CatalogWithCategories.module.css'
import { cormorant, oswaldo } from '@/fonts/fonts'


export default function CatalogWithCategories() {
  return (
    <div className={styles.container}>
        <p className={styles.text1 + ' ' + cormorant.className}>Каталог</p>
        <p className={styles.text2 + ' ' + cormorant.className}>Букетов</p>
        <p className={styles.text3 + ' ' + oswaldo.className}>В нашем магазине самый большой выбор букетов для любых событий:</p>
        <div className={styles.categoryContainer}>
          {categories.map(item => {
            return <CategoryBtn key={item.id} categoryName={item.category}/>
          })}
        </div>
    </div>
  )
}
