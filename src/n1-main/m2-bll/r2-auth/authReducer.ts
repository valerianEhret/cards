import {AuthEvents} from '../events';
import {AuthStateType, initialState, IUser, StatusType} from './authInitState';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";




const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUserData(state, action:PayloadAction<IUser>) {
            state.user = action.payload
            state.loading = false
            state.isLogin = true
        },
        setLoading(state, action:PayloadAction<{predicate:boolean}>) {
            state.loading = action.payload.predicate
        },
        setError(state, action:PayloadAction<{error:string}>) {
            state.error = action.payload.error
            state.loading = false
        },
        logoutAC(state, action:any) {
            debugger
            state.loading = false
            state.isLogin = false
            state.user = null
            state.error = ''
        },
        setLoginStatus(state, action:PayloadAction<{isLogin: boolean}>) {
            state.isLogin = action.payload.isLogin
            state.loading = false
        },
        setRegisterStatus(state, action:PayloadAction<{status:StatusType}>) {
            state.registerStatus = action.payload.status
            state.loading = false
        },
        setForgotStatus(state, action:PayloadAction<{status:StatusType}>) {
        state.forgotStatus = action.payload.status
            state.loading = false
        },
        setPasswordChange(state, action:PayloadAction<{isPasswordChanged: boolean}>){
        state.isPasswordChanged  = action.payload.isPasswordChanged
            state.loading = false
        }

    }
})

export const authReducer = slice.reducer

export const {
    setUserData,
    setLoading,
    setError,
    logoutAC,
    setLoginStatus,
    setRegisterStatus,
    setForgotStatus,
    setPasswordChange
} = slice.actions



//
// export const authReducer = (state = initialState, action: AuthActionsType): AuthStateType => {
//     switch (action.type) {
//         case AuthEvents.SET_USER_DATA:
//             return {...state, user: action.payload, loading: false, isLogin: true}
//         case AuthEvents.SET_LOADING:
//             return {...state, loading: action.predicate}
//         case AuthEvents.SET_ERROR:
//             return {...state, error: action.error, loading: false}
//         case AuthEvents.LOGOUT:
//             return {...state, loading: false, isLogin: false, user: null, error:''}
//         case AuthEvents.SET_LOGIN_STATUS :
//             return {...state, isLogin: action.isLogin, loading: false}
//         case AuthEvents.SET_REGISTER_STATUS :
//             return {...state, registerStatus: action.status, loading: false}
//         case AuthEvents.SET_FORGOT_STATUS :
//             return {
//                 ...state, forgotStatus: action.status, loading: false
//             }
//         case AuthEvents.SET_PASSWORD_CHANGE:
//             return {
//                 ...state, isPasswordChanged:action.isPasswordChanged, loading:false
//             }
//         default :
//             return state
//     }
// }
//



