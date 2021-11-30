import React from 'react'
import {Field, Form, FormikProps} from 'formik';
import {InputField} from "../../../../n1-main/m1-ui/common/alternative/InputField/InputField";
import styles from './Forgot.module.scss'
import {ButtonNya} from '../../common/alternative/Button/ButtonNya';
import {NavLink} from 'react-router-dom'

type ForgotPropsType = FormikProps<any> & {
    error: null | string
    loading: boolean
}

export const Forgot: React.FC<ForgotPropsType> = (props) => (
    <div className={`container flex ${styles.root}`}>
        <Form className={'form'} onSubmit={props.handleSubmit}>
            <h2>it-incubator</h2>
            <h3>Forgot your password?</h3>
            <Field name={'email'} type={'email'} label={'email'} component={InputField}/>
            <div className={styles.description}>Enter your email address and we will send you further instructions </div>
            <ButtonNya type="submit" disabled={props.loading} className={styles.button}>
                Submit
            </ButtonNya>
            <div className={styles.remember}>Did you remember your password?</div>
            <NavLink className={styles.loginLink} to={'/login'}>Try logging in</NavLink>
        </Form>
        <div className={styles.error}>{props.error}</div>
    </div>
    )

