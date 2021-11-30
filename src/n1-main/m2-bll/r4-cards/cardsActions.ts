
import {CardType, GetCardsResponseType} from '../../m3-dal/cardsAPI';
import {CardsEvents} from '../events';
import {InferActionsType} from '../ActionsType';

export type CardsActionsType = InferActionsType<typeof cardsActions>

export const cardsActions = {
    setCards: (cardsInfo: GetCardsResponseType) => {
        return {
            type: CardsEvents.SET_CARDS,
            cardsInfo
        } as const
    },
    setIsLoading: (isLoading: boolean) => {
        return {
            type: CardsEvents.SET_CARDS_LOADING,
            isLoading
        } as const
    }

}