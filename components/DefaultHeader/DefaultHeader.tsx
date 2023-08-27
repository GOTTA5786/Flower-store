import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import styles from './DefaultHeader.module.css'
import { oswaldo } from '@/fonts/fonts'
import { FaSquareWhatsapp,FaSquarePhone,FaInstagram,FaPhone } from "react-icons/fa6";
import CartBtn from '../CartBtn/CartBtn'


export default function DefaultHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.containerHead}>
          <Link href={'/'} className={styles.logoLink}><Logo/></Link>
          <Link
              className={styles.link + ' ' + oswaldo.className} 
              href={'/catalog'}>Каталог</Link>
          <p className={styles.link + ' ' + oswaldo.className}>Доставка и оплата</p>
          <p className={styles.link + ' ' + oswaldo.className}>О нас</p>
          <p className={styles.link + ' ' + oswaldo.className}>Контакты</p>
          <p className={styles.link + ' ' + oswaldo.className}>FAQ</p>
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.containerText}>
          <p className={styles.blueText + ' ' + oswaldo.className}>zakaz@loverflower.ru</p>
          <p className={styles.operator + ' ' + oswaldo.className}>Доставка 24/7 по договоренности с оператором</p>
        </div>
        <div className={styles.containerText}>
          <p className={styles.blueText + ' ' + oswaldo.className}>ул. Тимирязева 67</p>
          <p className={styles.workingTime + ' ' + oswaldo.className}>10:00 до 21:00 без выходных</p>
        </div>
        <div className={styles.blurContainer1}>
          <FaInstagram className={styles.icon}/>
          <FaSquareWhatsapp className={styles.icon}/>
          <FaSquarePhone className={styles.icon}/>
        </div>
        <p className={styles.phoneNumber + ' ' + oswaldo.className}>+7-888-888-88-88</p>
        <div className={styles.blurContainer2}>
          <FaPhone className={styles.iconPhone}/>
          <p className={styles.blueText + ' ' + oswaldo.className}>Заказать звонок</p>
        </div>
        <div className={styles.blurContainer3}>
          <CartBtn/>
        </div>
      </div>
    </div>
  )
}
