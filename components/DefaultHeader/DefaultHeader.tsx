import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import styles from './DefaultHeader.module.css'
import { cormorant, oswaldo } from '@/fonts/fonts'


export default function DefaultHeader() {
  return (
    <div className={styles.container}>
        <Logo/>
        <Link
            className={styles.link + ' ' + oswaldo.className} 
            href={'/catalog'}>Каталог</Link>
        <p className={styles.link + ' ' + oswaldo.className}>Доставка и оплата</p>
        <p className={styles.link + ' ' + oswaldo.className}>О нас</p>
        <p className={styles.link + ' ' + oswaldo.className}>Контакты</p>
        <p className={styles.link + ' ' + oswaldo.className}>FAQ</p>
    </div>
  )
}
