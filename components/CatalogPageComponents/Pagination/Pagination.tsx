'use client'
import styles from './Pagination.module.css'
import { FaArrowLeft,FaArrowRight  } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { useAppDispatch } from '@/hooks/hooks';
import { setPage } from '@/store/filterSlice';
import { oswaldo } from '@/fonts/fonts';

interface IProp{
    pages:number
    currentPage:number
    params?:{ slug?: string[] }
    searchParams?: {page?:string}
  }

export default function Pagination( {currentPage,pages} :IProp ) {
    const pathname = usePathname()
    console.log(pathname);
    const dispatch = useAppDispatch()
    const pagesQuantity = Array.from({length: pages}, (_, index) => index + 1);
  return (
    <div className={styles.container + " " + oswaldo.className}>
        <FaArrowLeft className={styles.arrow} onClick={e => {if (currentPage > 1){dispatch(setPage(currentPage-1))}}}/>
            {pagesQuantity.map(index => {return <p className={(currentPage === index)? styles.activePageBtn: styles.pageBtn} key = {index} onClick={e => dispatch(setPage(index))}>{index}</p>})}
        <FaArrowRight className={styles.arrow} onClick={e => {if (currentPage < pages){dispatch(setPage(currentPage+1))}}}/>
    </div>
  )
}
