import styles from './MainCatalogLandingFields.module.css'
import { oswaldo } from '@/fonts/fonts'

interface Props{
  prop:{
    id: number,
    main:string,
    children:string[]
  }
}


export default function MainCatalogLandingFields({prop}:Props) {
  return (
    <>
      <p className={styles.p + " " + oswaldo.className}> {prop.main} </p>
      <ul className={styles.ul}>
        {prop.children.map((item:string,i:number):any => { return <li key={prop.id} className={styles.li + " " + oswaldo.className}>{item}</li> })}
      </ul>
    </>
  )
}
