export interface CatalogLanding{
   readonly main: string
   readonly children: string[]
}


export const firstCatalog:CatalogLanding = {
    main: 'Цветы',
    children: ['Сборные букеты','Монобукеты','Композиции из цветов','розы','свадебные']
}

export const secondCatalog:CatalogLanding = {
    main: 'готовые букеты из сухоцветов',
    children: ['букеты','для интерьера','Композиции']
}

export const thirdCatalog:CatalogLanding = {
    main: 'дополнительно',
    children: ['шары','игрушки','открытки','упаковка']
}

