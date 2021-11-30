import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "../store";
import {cardsActions, CardsActionsType} from "./cardsActions";
import {cardsAPI, CardTypeForEdit} from "../../m3-dal/cardsAPI";

export const getCards = (cardsPack_id: string): ThunkAction<void, AppRootStateType, {}, CardsActionsType> =>
    async (dispatch) => {
        dispatch(cardsActions.setIsLoading(true))
        try {
            const response = await cardsAPI.getCards({cardsPack_id})
            dispatch(cardsActions.setCards(response))
        } catch (e) {
            console.log('CARDS_FETCHING_ERROR: ', {...e})
        } finally {
            dispatch(cardsActions.setIsLoading(false))
        }
    }

export const addNewCard = (card: CardTypeForEdit, cardPack_id: string): ThunkAction<void, AppRootStateType, {}, CardsActionsType> =>
    async (dispatch) => {
        dispatch(cardsActions.setIsLoading(true))
        try {
            await cardsAPI.createNewCard(card);
            dispatch(getCards(cardPack_id))
        } catch (e) {
            console.log('ADD_NEW_CARD_ERROR: ', {...e})
        } finally {
            dispatch(cardsActions.setIsLoading(false))
        }
    }

export const deleteCard = (cardPack_id: string, id: string): ThunkAction<void, AppRootStateType, {}, CardsActionsType> =>
    async (dispatch) => {
        dispatch(cardsActions.setIsLoading(true))
        try {
            await cardsAPI.deleteCard(id);
            dispatch(getCards(cardPack_id))
        } catch (e) {
            console.log('DELETE_CARD_ERROR: ', {...e})
        } finally {
            dispatch(cardsActions.setIsLoading(false))
        }
    }

export const editCard = (card: CardTypeForEdit, _id: string): ThunkAction<void, AppRootStateType, {}, CardsActionsType> =>
    async (dispatch) => {
            dispatch(cardsActions.setIsLoading(true))
            try {
                await cardsAPI.editCard({...card, _id});
                dispatch(getCards(card.cardsPack_id))
            } catch (e) {
                console.log('EDIT_CARD_ERROR: ', {...e})
            } finally {
                dispatch(cardsActions.setIsLoading(false))
            }
         }


    export const gradeCardTC = (grade:number, card_id:string) => async (dispatch:any) => {
        dispatch(cardsActions.setIsLoading(true))
        try {
            await cardsAPI.changeGradeCard(grade, card_id)
        } catch (e) {
            console.log('GRADE_CARD_ERROR: ', {...e})
        } finally {
            dispatch(cardsActions.setIsLoading(false))
        }
    }