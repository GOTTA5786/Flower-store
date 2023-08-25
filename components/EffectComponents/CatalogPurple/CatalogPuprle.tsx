import styles1 from './CatalogPuprle1.module.css'
import styles2 from './CatalogPuprle2.module.css'
import styles3 from './CatalogPuprle3.module.css'
import styles4 from './CatalogPuprle4.module.css'

interface Position{
    position: 1 | 2 | 3 | 4;
}

export default function CatalogPuprle({ position }:Position) {
    switch (position) {
        case 1:
            return <div className={styles1.container}></div>
        case 2:
            return <div className={styles2.container}></div>
        case 3:
            return <div className={styles3.container}></div>
        case 4:
            return <div className={styles4.container}></div>
      }
      
}
