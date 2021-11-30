import {Dispatch} from 'redux';
import {getCardPacks} from '../r3-packs/packsThunk';
import {findPaginationActions, FindPaginationActionsType} from './findPaginationAction';
import {ThunkAction} from 'redux-thunk';
import {AppRootStateType} from '../store';

export const SetProductNameTC = (productName: string) => (dispatch: Dispatch) => {
    dispatch(findPaginationActions.setProductNameAC(productName))
}


export const setMinMaxTC = (minPrice: number, maxPrice: number): ThunkAction<void, AppRootStateType, {}, FindPaginationActionsType> => (dispatch) => {
    dispatch(findPaginationActions.setMinMaxAC(minPrice, maxPrice))
}

export const setPageCountTC = (pageCount: number): ThunkAction<void, AppRootStateType, {}, FindPaginationActionsType> => (dispatch) => {
    dispatch(findPaginationActions.setPageCountAC(pageCount))
    dispatch(getCardPacks())
}

export const setCurrentPageTC = (currentPage: number): ThunkAction<void, AppRootStateType, {}, FindPaginationActionsType> => (dispatch) => {
    dispatch(findPaginationActions.setCurrentPageAC(currentPage))
    dispatch(getCardPacks())
}

export const setSortTC = (direction: number, sortObject: string): ThunkAction<void, AppRootStateType, {}, FindPaginationActionsType> => (dispatch) => {
    dispatch(findPaginationActions.setSortAC(direction, sortObject))
    dispatch(getCardPacks())
}

export const setUserId = (): ThunkAction<void, AppRootStateType, {}, FindPaginationActionsType> => (dispatch) => {
    dispatch(getCardPacks())
}