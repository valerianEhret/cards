import React from 'react';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {Forgot} from './Forgot';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {Preloader} from '../../../../n1-main/m1-ui/common/c4-Preloader/Preloader';
import {CheckEmail} from '../CheckEmail/CheckEmail';
import {recoveryPasswordTC} from '../../../m2-bll/r2-auth/authThunk';
import {AuthStateType} from '../../../m2-bll/r2-auth/authInitState';
import {Backdrop} from '../../common/Backdrop/Backdrop';

type ErrorsValueType = {
    email?: string
}

export const ForgotContainer = () => {
    const {forgotStatus, error, loading} = useSelector<AppRootStateType, AuthStateType>(state => state.auth)
    const dispatch = useDispatch()

    if (forgotStatus === 'success') {
        return <CheckEmail/>
    }
    return (
        <>
            {loading && <Backdrop>
                <Preloader/>
            </Backdrop>}
            <Formik
                initialValues={{email: ''}}

                validate={values => {
                    const errors: ErrorsValueType = {};
                    if (!values.email) {
                        errors.email = 'email is required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    dispatch(recoveryPasswordTC(values.email))
                }}
            >
                {(props) => (
                    <Forgot {...props} error={error} loading={loading}/>
                )}
            </Formik>
        </>
    )
}

