import React from 'react';
import {Login} from './Login';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../m2-bll/store';
import {Redirect} from 'react-router-dom';
import {Preloader} from '../../common/c4-Preloader/Preloader';
import {Formik} from 'formik';
import {AuthStateType} from '../../../m2-bll/r2-auth/authInitState';
import {loginTC} from '../../../m2-bll/r2-auth/authThunk';
import {Backdrop} from '../../common/Backdrop/Backdrop';


type ErrorsType = {
    email?: string
    password?: string
}

export const LoginContainer = () => {
        const {isLogin, error, loading} = useSelector<AppRootStateType, AuthStateType>(state => state.auth)
        const dispatch = useDispatch();
        if (isLogin) {
            return <Redirect to={'profile'}/>
        }


        return (
            <>
                {loading && <Backdrop>
                    <Preloader/>
                </Backdrop>}
                <Formik
                    initialValues={{email: 'testtest@gmail.com', password: '12345678', rememberMe: false}}
                    validate={values => {
                        const errors: ErrorsType = {};

                        if (!values.email) {
                            errors.email = 'This field is required!';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email format';
                        }

                        if (!values.password) {
                            errors.password = 'This field is required!';
                        } else if (values.password.length < 8) {
                            errors.password = 'Password must be more than 7 characters';
                        }

                        return errors;
                    }}
                    onSubmit={({email, password, rememberMe}) => {
                        dispatch(loginTC(email, password, rememberMe))
                    }}
                >
                    {
                        (props) => (
                            <Login {...props} error={error} loading={loading}/>
                        )
                    }
                </Formik>
            </>

        );
    }
;

