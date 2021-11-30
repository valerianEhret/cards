import React from 'react';
import {ButtonNya} from '../../common/alternative/Button/ButtonNya';
import styles from './Login.module.scss'
import {Field, Form, FormikProps} from 'formik';
import {InputField} from '../../common/alternative/InputField/InputField';
import {CheckBox} from '../../common/alternative/CheckBox/CheckBox';
import {NavLink} from 'react-router-dom'

type LoginPropsType = FormikProps<any> & {
    error: string,
    loading: boolean
}

export const Login: React.FC<LoginPropsType> =
    ({
         error,
         handleSubmit,
         loading
     }) => {
        return (
            <section className={`${styles.root} container flex`}>
                <Form className={'form'} onSubmit={handleSubmit}>
                    <h2>it-incubator</h2>
                    <h3>Sign-in</h3>
                    <Field name={'email'} type={'email'} label={'email'} component={InputField}/>
                    <Field name={'password'} type={'password'} label={'password'} component={InputField}/>
                    <div className={styles.checkbox_wrapper}>
                        <Field name={'rememberMe'} type={'checkbox'} component={CheckBox} className={styles.checkbox}/>
                        <div>remember me</div>
                    </div>

                    <div className={styles.forgotLinkWrapper}>
                        <NavLink to={'/forgot'} className={styles.forgotLink}>
                            Forgot Password?
                        </NavLink>
                    </div>

                    <ButtonNya title={'Login'} type={'submit'} disabled={loading} className={styles.button}>
                        Login
                    </ButtonNya>

                    <div className={styles.signUpTitle}>Don't have an account?</div>
                    <NavLink to={'/registration'} className={styles.signUpLink}>
                        Sign up
                    </NavLink>
                </Form>
            </section>
        )
    }



