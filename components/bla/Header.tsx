'use client'
import { oswaldo } from '@/fonts/fonts';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import CartBtn from '../CartBtn/CartBtn';
import Logo from '../Logo/Logo';
import ProviderWrapper from '../ProviderWrapper/ProviderWrapper';
import styles from './Header.module.css'

interface IScroll {
  isFixed:boolean
}

export default function Header({isFixed}:IScroll) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <header className={`${styles.container} ${isFixed ? styles.show : (scrollY >= 100) ? styles.show : ''} ${oswaldo.className}`}>
      <div className={styles.content}>
        <Link href={'/'} className={styles.logoLink}><Logo/></Link>
        <Link
            className={styles.link + ' ' + oswaldo.className} 
            href={'/catalog'}>Каталог</Link>
        <p className={styles.link}>Доставка и оплата</p>
        <p className={styles.link}>О нас</p>
        <p className={styles.link}>Контакты</p>
        <p className={styles.link}>FAQ</p>
        <ProviderWrapper><CartBtn/></ProviderWrapper>
      </div>
    </header>
  )
}