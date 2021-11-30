import {cardsInitialState, CardsInitialStateType} from "./cardsInitialState";
import {CardsActionsType} from "./cardsActions";
import {CardsEvents} from '../events';

export const cardsReducer = (
    state: CardsInitialStateType = cardsInitialState,
    action: CardsActionsType): CardsInitialStateType => {
    switch(action.type) {
        case CardsEvents.SET_CARDS:
            return {...state, ...action.cardsInfo}
        case CardsEvents.SET_CARDS_LOADING:
            return {...state, isLoading: action.isLoading}
        default: return state
    }
}