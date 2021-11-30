export type StatusType = 'success' | 'error' | 'idle'

export type  IUser = {
    _id: string
    email: string
    name: string
    token:string
    tokenDeathTime:number
    publicCardPacksCount: number
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
}

export type AuthStateType = {
    forgotStatus: StatusType
    registerStatus: StatusType
    isPasswordChanged: boolean
    loading: boolean
    isLogin: boolean
    error: string
    user: IUser | null
}


export const initialState: AuthStateType = {
    forgotStatus: 'idle',
    registerStatus: 'idle',
    isPasswordChanged: false,
    loading: false,
    isLogin: false,
    error: '',
    user: null
}