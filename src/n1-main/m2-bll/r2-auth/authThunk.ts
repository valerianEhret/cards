import {ThunkAction} from 'redux-thunk';
import {AppRootStateType} from '../store';
import {authAPI} from '../../m3-dal/authAPI';
import {
    logoutAC,
    setError,
    setForgotStatus,
    setLoading,
    setPasswordChange,
    setRegisterStatus,
    setUserData
} from "./authReducer";
// import {authActions, AuthActionsType} from './authActions'


export const setErrorTC = (error: string): ThunkAction<void, AppRootStateType, {}, any> => async (dispatch) => {
    dispatch(setError({error}))
    // setTimeout(() => dispatch(authActions.setError('')), 3000)
}

export const infoTC = (name?:string, avatar?:string): ThunkAction<void, AppRootStateType, {}, any> => async (dispatch) => {
    dispatch(setLoading({predicate:true}))
    try {
        const data = await authAPI.info(name,avatar)
        dispatch(setUserData(data.updatedUser))
    }catch (e){
        e.response ? dispatch(setErrorTC(e.response.data.error)) : dispatch(setErrorTC(`Error: ${e.message}`))
    }
}


export const setUserDataTC = (): ThunkAction<void, AppRootStateType, {}, any> => async (dispatch) => {
    dispatch(setLoading({predicate:true}))
    try {
        const data = await authAPI.me()
        dispatch(setUserData(data))
    } catch (e) {
        e.response ? dispatch(setErrorTC(e.response.data.error)) : dispatch(setErrorTC(`Error: ${e.message}`))
    }
}


export const logout = (): ThunkAction<void, AppRootStateType, {}, any> => async (dispatch) => {
    debugger
    dispatch(setLoading({predicate:true}))
    try {
        const response = await authAPI.logout()
        dispatch(logoutAC({}))
        return response
    } catch (e) {
        e.response ? dispatch(setErrorTC(e.response.data.error)) : dispatch(setErrorTC(`Error: ${e.message}`))
    }

}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppRootStateType, {}, any> => async (dispatch) => {
    dispatch(setLoading({predicate:true}))
    try {
        const data = await authAPI.logIn(email, password, rememberMe);
        dispatch(setUserData(data))
    } catch (e) {
        e.response ? dispatch(setErrorTC(e.response.data.error)) : dispatch(setErrorTC(`Error: ${e.message}`))
    }
}

export const registerTC = (payload: { email: string, password: string, password2: string }): ThunkAction<void, AppRootStateType, {}, any> => async (dispatch) => {
    dispatch(setLoading({predicate:true}))
    try {
        await authAPI.register(payload)
        dispatch(setRegisterStatus({status:'success'}))
    } catch (e) {
        dispatch(setRegisterStatus({status:'error'}))
        e.response ? dispatch(setErrorTC(e.response.data.error)) : dispatch(setErrorTC(`Error: ${e.message}`))
    } finally {
        dispatch(setRegisterStatus({status:'idle'}))
    }
}


export const recoveryPasswordTC = (email: string): ThunkAction<void, AppRootStateType, {}, any> => async (dispatch) => {
    dispatch(setLoading({predicate: true}))
    try {
        await authAPI.recoverPass(email)
        dispatch(setForgotStatus({status:'success'}))
    } catch (e) {
        e.response ? dispatch(setErrorTC(e.response.data.error)) : dispatch(setErrorTC(`Error: ${e.message}`))
    }
}


export const setNewPasswordTC = (password: string, resetPasswordToken: string): ThunkAction<void, AppRootStateType, {}, any> => async (dispatch) => {
    dispatch(setLoading({predicate:true}))
    try {
        await authAPI.setNewPass(password, resetPasswordToken)
        dispatch(setPasswordChange({isPasswordChanged:true}))
    } catch (e) {
        e.response ? dispatch(setErrorTC(e.response.data.error)) : dispatch(setErrorTC(`Error: ${e.message}`))
    }
}