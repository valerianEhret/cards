import {AuthEvents} from '../events';
import {InferActionsType} from '../ActionsType';
import {IUser, StatusType} from './authInitState';

// export type AuthActionsType = InferActionsType<typeof authActions>

// export const authActions = {
    // setUserData: (payload: IUser) => {
    //     return {
    //         type: AuthEvents.SET_USER_DATA,
    //         payload
    //     } as const
    // },
    // setLoading: (predicate: boolean) => {
    //     return {
    //         type: AuthEvents.SET_LOADING,
    //         predicate
    //     } as const
    // },
    // setError: (error: string) => {
    //     return {
    //         type: AuthEvents.SET_ERROR,
    //         error
    //     } as const
    // },
    // logout: () => {
    //     return {
    //         type: AuthEvents.LOGOUT
    //     } as const
    // },
    // setLoginStatus: (isLogin: boolean) => {
    //     return {
    //         type: AuthEvents.SET_LOGIN_STATUS,
    //         isLogin,
    //     } as const;
    // },
    // setRegisterStatus: (status: StatusType) => {
    //     return {
    //         type: AuthEvents.SET_REGISTER_STATUS,
    //         status
    //     } as const
    // },
    // setForgotStatus: (status: StatusType) => {
    //     return {
    //         type: AuthEvents.SET_FORGOT_STATUS, status
    //     } as const
    // },
//     setPasswordChange: (isPasswordChanged: boolean) => {
//         return {
//             type: AuthEvents.SET_PASSWORD_CHANGE, isPasswordChanged
//         } as const
//     }
// }