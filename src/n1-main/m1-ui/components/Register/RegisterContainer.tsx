import React from 'react';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, useHistory} from 'react-router-dom';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {Register} from './Register';
import {AuthStateType} from '../../../m2-bll/r2-auth/authInitState';
import {registerTC} from '../../../m2-bll/r2-auth/authThunk';
import {Backdrop} from '../../common/Backdrop/Backdrop';
import {Preloader} from '../../common/c4-Preloader/Preloader';

type ErrorsValueType = {
    email?: string,
    password?: string,
    password2?: string
}


export const RegisterContainer = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {error, loading, registerStatus} = useSelector<AppRootStateType, AuthStateType>(state => state.auth)
    if (registerStatus === 'success') {
        return <Redirect to={'/login'}/>
    }
    return (
        <>
            {loading && <Backdrop>
                <Preloader/>
            </Backdrop>}
            <Formik
                initialValues={{email: '', password: '', password2: ''}}
                validate={values => {
                    const errors: ErrorsValueType = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (
                        !values.password
                    ) {
                        errors.password = 'Введите пароль'
                    }
                    if (
                        !values.password2
                    ) {
                        errors.password2 = 'Введите пароль'
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    dispatch(registerTC(values))
                }}
                onReset={() => {
                    history.push('/login')
                }
                }
            >
                {(props) => (
                    <Register {...props} error={error} loading={loading}/>
                )}
            </Formik>
        </>
    )
}