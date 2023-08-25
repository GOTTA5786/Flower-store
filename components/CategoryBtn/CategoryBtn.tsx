import style from './CategoryBtn.module.css'
import { oswaldo } from '@/fonts/fonts'
interface Props{
    categoryName:string
}

export default function CategoryBtn({categoryName}:Props) {
  return (
    <div className={style.container}>
        <p className={style.category + ' ' + oswaldo.className}>{categoryName}</p>
    </div>
  )
}
