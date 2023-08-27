'use client'
import { oswaldo } from '@/fonts/fonts'
import CatalogPriceSlider from '../CatalogPriceSlider/CatalogPriceSlider'
import styles from './CatalogFilter.module.css'

export default function CatalogFilter() {
  return (
    <div className={styles.container}>
        <div>
            <p className={styles.main + ' ' + oswaldo.className}>по свету</p>
            <ul className={styles.ul + ' ' + oswaldo.className}>
                <li><label><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>нежные</label></li>
                <li><label><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>яркие</label></li>
            </ul>
        </div>
        <div>
            <p className={styles.main + ' ' + oswaldo.className}>по цвету</p>
            <ul className={styles.ul + ' ' + oswaldo.className}>
                <li><label><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>белый</label></li>
                <li><label><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>желтый</label></li>
                <li><label><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>зеленый</label></li>
                <li><label><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>красный</label></li>
                <li><label><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>оранжевый</label></li>
                <li><label><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>розовый</label></li>
                <li><label><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>синий</label></li>
            </ul>
        </div>
        <div>
            <p className={styles.main + ' ' + oswaldo.className}>по формату</p>
            <ul className={styles.ul + ' ' + oswaldo.className}>
                <li><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>букет</li>
                <li><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>в вазе</li>
                <li><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>в конверте</li>
                <li><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>в корзине</li>
                <li><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>в шляпной коробке</li>
                <li><input className={styles.realCheckbox} type={'checkbox'}/><span className={styles.customCheckbox}/>в ящике</li>
            </ul>
        </div>
        <div>
            <p className={styles.main + ' ' + oswaldo.className}>Стоимость</p>
            <CatalogPriceSlider/>
        </div>
    </div>
  )
}
