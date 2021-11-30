import {IUser} from '../m2-bll/r2-auth/authInitState';
import {instance} from './axios';


export type DefaultResponse = {
    info: string,
    error?: string
}

export  type RegisterResponse = {
    addedUser: {},
    error?: string
}



export const authAPI = {
    me: async () => {
        const response = await instance.post<IUser>('auth/me')
        return response.data
    },
    info: async (name?:string, avatar?:string) => {
        const response = await instance.put<{updatedUser:IUser, error?:string}>('auth/me', {name,avatar})
        return response.data
    },
    logout: async () => {
        debugger
        const response = await instance.delete<DefaultResponse>('auth/me')
        console.log('LOGOUT: ', response.data)
        return response.data
    },
    logIn: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<IUser>('auth/login', {email, password, rememberMe})
        return response.data
    },
    register: async (payload: { email: string, password: string }) => {
        const response = await instance.post<RegisterResponse>('auth/register', payload)
        console.log('Register: ', response.data)
        return response.data
    },
    recoverPass: async (email: string) => {
        const response = await instance.post<DefaultResponse>(`auth/forgot`, {
            email,
            from: 'test-front-admin <ai73a@yandex.by>',
            message: `<div style="background-color: lime; padding: 15px"><a href='http://localhost:3000/#/new-password/$token$'>create new password</a></div>`
        })
        console.log('RECOVER: ', response.data)
        return response.data
    },
    setNewPass: async (password: string, resetPasswordToken: string) => {
        const response = await instance.post<DefaultResponse>(`auth/set-new-password`, {password, resetPasswordToken})
        console.log('SETNEW: ', response.data)
        return response.data
    },
}