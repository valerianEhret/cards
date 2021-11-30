import React from 'react'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../n1-main/m2-bll/store';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../n1-main/m2-bll/r1-app/appInitState';
import {Preloader} from '../n1-main/m1-ui/common/c4-Preloader/Preloader';
import {AuthStateType} from '../n1-main/m2-bll/r2-auth/authInitState';
import {Backdrop} from '../n1-main/m1-ui/common/Backdrop/Backdrop';


export const WithAuthRedirect: React.FC = React.memo(({children}) => {
    const {error,loading} = useSelector<AppRootStateType,AppStateType>((state)=> state.app)
    const {isLogin} = useSelector<AppRootStateType, AuthStateType>(state => state.auth)

    if(loading){
        return <Backdrop><Preloader/></Backdrop>
    }

    if (error) {
        return <Redirect to={'/login'}/>
    }

    if(!isLogin) {
        return <Redirect to={'/login'}/>
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
})
