import {packsActions, PacksActionsType} from './packsActions';
import {AppRootStateType} from '../store';
import {ThunkAction} from 'redux-thunk';
import {packsAPI, ParametersForCreatePackType} from '../../m3-dal/packsAPI';
import {findPaginationActions, FindPaginationActionsType} from '../r5-findPagination/findPaginationAction';


export const getCardPacks = (user_id?:string): ThunkAction<void, AppRootStateType, {}, PacksActionsType | FindPaginationActionsType> => async (dispatch, getState) => {
    dispatch(packsActions.seIsLoading(true))
    const state = getState()
    const {productName, minPrice, maxPrice, pageCount, page, direction, sortObject} = state.findPagination
    try {

        const id = user_id? user_id : ''

        const res = await packsAPI.getCardPacks(productName, minPrice, maxPrice, pageCount, page, direction, sortObject, id);
        dispatch(packsActions.setCardsPacks(res.cardPacks))
        //сетается значение максимального количества страниц, используется для отрисовки кол-ва страниц в пагинаторе
        dispatch(findPaginationActions.setCardsPacksTotalCountAC(res.cardPacksTotalCount))
    } catch (e) {
        console.log('Packs error: ', {...e})
    } finally {
        dispatch(packsActions.seIsLoading(false))
    }
}

export const addNewCardPack = (params: ParametersForCreatePackType): ThunkAction<void, AppRootStateType, {}, PacksActionsType> =>
    async (dispatch) => {
    dispatch(packsActions.seIsLoading(true))
        try {
            await packsAPI.addNewPack(params);
            dispatch(getCardPacks())
        } catch (e) {
            console.log('ADD_CARD_ERROR: ', {...e})
        } finally {
            dispatch(packsActions.seIsLoading(false))
        }
    }

export const deleteCardPack = (id: string): ThunkAction<void, AppRootStateType, {}, PacksActionsType> =>
    async (dispatch) => {
        dispatch(packsActions.seIsLoading(true))
        try {
            await packsAPI.deleteCardPack(id);
            dispatch(getCardPacks())
        } catch (e) {
            console.log('ADD_CARD_ERROR: ', {...e})
        } finally {
            dispatch(packsActions.seIsLoading(false))
        }
    }

export const editCardsPack = (_id: string, name: string = 'some name'): ThunkAction<void, AppRootStateType, {}, PacksActionsType> =>
    async (dispatch, getState: () => AppRootStateType) => {
        const state = getState();
        const packForEdit = state.packs.cardPacks.find(pack => pack._id === _id);
        if (packForEdit) {
            const packAfterEdit = {...packForEdit, name}
            try {
                await packsAPI.editCardPack(packAfterEdit)
                dispatch(getCardPacks())
            } catch (e) {
                console.log('EDIT_PACK_ERROR: ', {...e})
            }
        }
    }