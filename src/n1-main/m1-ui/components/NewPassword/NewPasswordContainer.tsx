import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {useParams} from 'react-router-dom'
import {Formik} from 'formik';
import {Preloader} from "../../../../n1-main/m1-ui/common/c4-Preloader/Preloader";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {NewPassword} from "./NewPassword";
import {setNewPasswordTC} from '../../../m2-bll/r2-auth/authThunk';
import {AuthStateType} from '../../../m2-bll/r2-auth/authInitState';
import {Backdrop} from '../../common/Backdrop/Backdrop';


type ErrorsValueType = {
    password?: string
}

export const NewPasswordContainer = () => {
    const {error, loading, isPasswordChanged} = useSelector<AppRootStateType, AuthStateType>(state => state.auth)
    const dispatch = useDispatch()
    let {token} = useParams<{ token: string }>()

    if (isPasswordChanged) {
        return <Redirect to={'/login'}/>
    }
    return (
        <>
            {loading && <Backdrop>
                <Preloader/>
            </Backdrop>}
            <Formik
                initialValues={{password: ''}}
                validate={values => {
                    const errors: ErrorsValueType = {};
                    if (
                        !values.password
                    ) {
                        errors.password = 'Enter password'
                    }

                    return errors;
                }}
                onSubmit={(values) => {
                    dispatch(setNewPasswordTC(values.password, token))
                }}
            >
                {(props) => (
                    <NewPassword {...props} error={error} loading={loading}/>
                )}
            </Formik>
        </>
    );
};