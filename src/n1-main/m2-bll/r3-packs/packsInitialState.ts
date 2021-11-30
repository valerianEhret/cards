export type CardPacksType = {
    _id : string
    user_id : string
    user_name : string
    private : boolean
    name : string
    path : string
    grade : number
    shots : number
    cardsCount : number
    type : string
    rating : number
    created : string
    updated : string
    more_id : string
    __v : number
}

export const packsInitialState = {
    isLoading: false,
    cardPacks: [] as Array<CardPacksType>,
    packsType: 'All' as 'My' | 'All',
    page: 1,
    pageCount: 4,
    cardPacksTotalCount: 1000,
    minCardsCount: 0,
    maxCardsCount: 103
}

export type PacksInitialStateType = typeof packsInitialState;


