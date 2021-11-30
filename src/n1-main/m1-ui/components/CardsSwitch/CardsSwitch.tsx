import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCardPacks} from "../../../m2-bll/r3-packs/packsThunk";
import {AppRootStateType} from "../../../m2-bll/store";
import {IUser} from "../../../m2-bll/r2-auth/authInitState";
import styles from './CardsSwitch.module.scss'

export const CardsSwitch = () => {

    const dispatch = useDispatch()
    let user = useSelector<AppRootStateType, IUser | null>(state=>state.auth.user)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.packs.isLoading)



    const [activeAll, setAllActive] = useState(true)
    const [activeMy, setMyActive] = useState(false)


    const showAllCards  = () => {
        setAllActive(true)
        setMyActive(false)
        dispatch(getCardPacks())
    }

    const showMyCards = () => {
        if (user) {
            setAllActive(false)
            setMyActive(true)
            dispatch(getCardPacks(user._id))
        }

    }



    return (
        <div>
            <div className={styles.title}>Show packs cards</div>
            <div className={'button_wrapper'}>
                <button onClick={showMyCards} className={`sqrBtn ${styles.btn} ${activeMy && styles.active}`} disabled={isLoading}>My</button>
                <button onClick={showAllCards} className={`sqrBtn ${styles.btn} ${activeAll && styles.active}`} disabled={isLoading}>All</button>
            </div>
        </div>
    )
}