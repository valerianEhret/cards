import {SnackBar} from './SnackBar';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../m2-bll/store';
import {AuthStateType} from '../../../m2-bll/r2-auth/authInitState';
import {setError} from "../../../m2-bll/r2-auth/authReducer";



export const SnackBarContainer = () => {
    const dispatch = useDispatch()
    const {error} = useSelector<AppRootStateType,AuthStateType>(state=> state.auth)
    const onCloseHandler = () => {
        dispatch(setError({error:''}))
    }
    return (
        <SnackBar message={error} onClose={onCloseHandler}/>
    )

}