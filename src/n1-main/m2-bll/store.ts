import thunkMiddleware from 'redux-thunk'
import {combineReducers} from 'redux'
import {authReducer} from './r2-auth/authReducer';
import {appReducer} from './r1-app/appReducer';
import {packsReducer} from './r3-packs/packsReducer';
import {findPaginationReducer} from './r5-findPagination/findPaginationReducer';
import {DEV_VERSION} from '../../config';
import {cardsReducer} from "./r4-cards/cardsReducer";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    packs: packsReducer,
    findPagination:findPaginationReducer,
    cards: cardsReducer
})

// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export const store  = configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),

})

export type AppRootStateType = ReturnType<typeof rootReducer>

if (DEV_VERSION) {
    // @ts-ignore
    window.store = store; // for dev
}