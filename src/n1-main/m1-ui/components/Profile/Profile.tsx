import React from 'react'
import {WithAuthRedirect} from '../../../../n4-hoc/WithAuthRedirect';
import styles from './Profile.module.scss'
import {NavLink, useHistory} from 'react-router-dom';
import {logout} from '../../../m2-bll/r2-auth/authThunk';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../m2-bll/store';
import {AuthStateType, IUser} from '../../../m2-bll/r2-auth/authInitState';
import SuperButton from '../../common/c2-SuperButton/SuperButton';
import {Backdrop} from '../../common/Backdrop/Backdrop';
import {Preloader} from '../../common/c4-Preloader/Preloader';

export const ProfileContainer = () => {
    const {loading} = useSelector<AppRootStateType, AuthStateType>(state=>state.auth)
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector<AppRootStateType, IUser | null>(state => state.auth.user)


    const onClickHandler = async () => {
        try{
            await dispatch(logout())
            history.push('/login')
        }
        catch (e){
            console.log('LOGOUT: ', e.response)
        }
    }

    if(loading) {
        return (
            <Backdrop><Preloader/></Backdrop>
        )
    }
    return (
        <div className={`container ${styles.profile_container}`}>
            <div>{user !== null && `Ваше Имя ${user.name}`}</div>
            <NavLink to={'/personal-information'}>Profile Edit</NavLink>
            <SuperButton onClick={onClickHandler} disabled={loading}>Logout</SuperButton>
        </div>
    )
}

export const Profile = () => {
    return (
        <WithAuthRedirect>
            <ProfileContainer/>
        </WithAuthRedirect>
    )
}