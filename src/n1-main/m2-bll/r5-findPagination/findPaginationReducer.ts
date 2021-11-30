import {FindPaginationActionsType} from './findPaginationAction'
import {FindPaginationInitialState, FindPaginationInitialStateType} from './findPaginationInitialState';
import {FindPaginationEvents} from '../events';


export const findPaginationReducer = (state = FindPaginationInitialState, action: FindPaginationActionsType): FindPaginationInitialStateType => {
    switch (action.type) {
        case FindPaginationEvents.SET_PRODUCT_NAME:
            return {...state, productName: action.productName}
        case FindPaginationEvents.SET_MIN_MAX:
            return {...state, minPrice:action.minPrice, maxPrice:action.maxPrice }
        case FindPaginationEvents.SET_PAGE_COUNT:
            return {...state, pageCount:action.pageCount}
        case FindPaginationEvents.SET_CARD_PACKS_TOTAL_COUNT:
            return {...state, cardPacksTotalCount:action.cardPacksTotalCount}
        case FindPaginationEvents.SET_CURRENT_PAGE:
            return {...state, page:action.page}
        case FindPaginationEvents.SET_SORT:
            return {...state, direction:action.direction, sortObject:action.sortObject}
        default:
            return state
    }
}
