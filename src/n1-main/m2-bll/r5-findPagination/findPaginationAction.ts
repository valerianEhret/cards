import {FindPaginationEvents} from '../events';
import {InferActionsType} from '../ActionsType';

export type FindPaginationActionsType = InferActionsType<typeof findPaginationActions>



export const findPaginationActions = {
    setProductNameAC: (productName: string) => {
        return {
            type: FindPaginationEvents.SET_PRODUCT_NAME, productName
        } as const
    },
    setMinMaxAC: (minPrice: number, maxPrice: number) => {
        return {
            type: FindPaginationEvents.SET_MIN_MAX, minPrice, maxPrice
        } as const
    },
    setPageCountAC: (pageCount: number) => {
        return {
            type: FindPaginationEvents.SET_PAGE_COUNT, pageCount
        } as const
    },

    setCardsPacksTotalCountAC: (cardPacksTotalCount: number) => {
        return {
            type: FindPaginationEvents.SET_CARD_PACKS_TOTAL_COUNT,
            cardPacksTotalCount
        } as const
    },

    setCurrentPageAC: (page: number) => {
        return {
            type: FindPaginationEvents.SET_CURRENT_PAGE, page
        } as const
    },

    setSortAC: (direction: number, sortObject: string) => {
        return {
            type: FindPaginationEvents.SET_SORT,
            direction,
            sortObject
        } as const
    }

}