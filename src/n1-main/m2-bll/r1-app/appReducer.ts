import {AppEvents} from '../events';
import {AppActionsType} from './appActions';
import {AppStateType, initialState} from './appInitState';


export const appReducer = (state = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case AppEvents.SET_APP_LOADING:
            return {...state, loading: action.predicate}
        case AppEvents.SET_APP_SUCCESS:
            return {...state, successInitializing: true}
        case AppEvents.SET_APP_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}

