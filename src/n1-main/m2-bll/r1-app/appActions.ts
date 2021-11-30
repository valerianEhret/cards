import {AppEvents} from '../events';
import {InferActionsType} from '../ActionsType'


export const appActions = {
    setLoading: (predicate: boolean) => {
        return {
            type: AppEvents.SET_APP_LOADING,
            predicate
        } as const
    },
    setSuccess: (predicate: boolean) => {
        return {
            type: AppEvents.SET_APP_SUCCESS,
            predicate
        } as const
    },
    setError: (error: string) => {
        return {
            type: AppEvents.SET_APP_ERROR,
            error
        } as const
    }
}
export type AppActionsType = InferActionsType<typeof appActions>