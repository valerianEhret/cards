export type AppStateType = {
    loading: boolean
    successInitializing: boolean
    error: string
}

export const initialState = {
    loading: true,
    successInitializing: false,
    error: ''
}