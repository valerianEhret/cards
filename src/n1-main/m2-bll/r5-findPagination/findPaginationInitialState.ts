export const FindPaginationInitialState: FindPaginationInitialStateType = {
    minPrice: 0,
    maxPrice: 100,
    productName: '',
    page: 1,
    pageCount: 10,
    cardPacksTotalCount: 120,
    direction:0,
    sortObject: '',
}


export type FindPaginationInitialStateType = {
    minPrice: number
    maxPrice: number
    productName: string
    page: number
    pageCount: number
    cardPacksTotalCount: number
    direction:number
    sortObject: string
}