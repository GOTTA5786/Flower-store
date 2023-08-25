import styles1 from './CatalogBlue1.module.css'
import styles2 from './CatalogBlue2.module.css'
import styles3 from './CatalogBlue3.module.css'
import styles4 from './CatalogBlue4.module.css'

interface Position{
    position: 1 | 2 | 3;
}

export default function CatalogBlue({ position }:Position) {
    switch (position) {
        case 1:
            return <div className={styles1.container}></div>
        case 2:
            return <div className={styles2.container}></div>
        case 3:
            return <div className={styles3.container}></div>
      }
      
}

