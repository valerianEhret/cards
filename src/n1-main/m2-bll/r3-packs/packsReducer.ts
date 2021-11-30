
import {PacksActionsType} from "./packsActions";
import {packsInitialState, PacksInitialStateType} from "./packsInitialState";
import {PacksEvents} from '../events';

export const packsReducer = (state: PacksInitialStateType = packsInitialState, action: PacksActionsType): PacksInitialStateType => {
    switch(action.type) {
        case PacksEvents.SET_CARD_PACKS:
            return {...state, cardPacks: action.cardPacks}
        case PacksEvents.SET_CARD_PACKS_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}