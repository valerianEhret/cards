import {ThunkAction} from 'redux-thunk';
import {AppRootStateType} from '../store';
import {appActions, AppActionsType} from './appActions';
import {authAPI} from '../../m3-dal/authAPI';
import {setLoginStatus, setUserData} from "../r2-auth/authReducer";
// import {authActions, AuthActionsType} from '../r2-auth/authActions';

export const initializingTC = (): ThunkAction<void, AppRootStateType, {}, AppActionsType | any> => async (dispatch) => {
    dispatch(appActions.setLoading(true))
    try {
        const data = await authAPI.me()
        console.log('INIT: ', data)
        dispatch(setUserData(data))
        dispatch(appActions.setSuccess(true))
    } catch (e) {
        console.log('INIT ERROR: ', e.response)
        e.response ? dispatch(appActions.setError(e.response.data.error)) : dispatch(appActions.setError(`Error: ${e.message}`))
        dispatch(setLoginStatus({isLogin:false}))
    } finally {
        dispatch(appActions.setLoading(false))
        setTimeout(()=>dispatch(appActions.setError('')),1000)
    }
}