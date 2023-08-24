export interface CatalogLanding{
    readonly id: number
    readonly main: string
    readonly children: string[]
}


export const firstCatalog:CatalogLanding = {
    id: 1,
    main: 'Цветы',
    children: ['Сборные букеты','Монобукеты','Композиции из цветов','розы','свадебные']
}

export const secondCatalog:CatalogLanding = {
    id: 2,
    main: 'готовые букеты из сухоцветов',
    children: ['букеты','для интерьера','Композиции']
}

export const thirdCatalog:CatalogLanding = {
    id: 3,
    main: 'дополнительно',
    children: ['шары','игрушки','открытки','упаковка']
}

