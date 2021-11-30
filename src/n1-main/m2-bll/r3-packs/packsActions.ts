import {CardPacksType} from "./packsInitialState";
import {PacksEvents} from '../events';
import {InferActionsType} from '../ActionsType';

export type PacksActionsType = InferActionsType<typeof packsActions>

export const packsActions = {
    setCardsPacks: (cardPacks: Array<CardPacksType>) => {
        return {
            type: PacksEvents.SET_CARD_PACKS,
            cardPacks
        } as const
    },
    seIsLoading: (isLoading: boolean) => {
        return {
            type: PacksEvents.SET_CARD_PACKS_LOADING,
            isLoading
        } as const
    }
}