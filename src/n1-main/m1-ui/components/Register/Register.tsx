import React from 'react';
import {Field, Form, FormikProps} from 'formik';
import {InputField} from '../../../../n1-main/m1-ui/common/alternative/InputField/InputField';
import styles from './register.module.scss'
import {ButtonNya} from '../../common/alternative/Button/ButtonNya';


type RegisterPropsType = FormikProps<any> & {
    error: string,
    loading: boolean
}

export const Register: React.FC<RegisterPropsType> = ({ handleSubmit, handleReset, error, loading }) => (
    <div className={`${styles.root} container flex`}>
        <Form className={'form'} onSubmit={handleSubmit} onReset={handleReset}>
            <h2>it-incubator</h2>
            <h3>Sign-up</h3>
            <Field name={'email'} type={'email'} component={InputField} label={'Email'}/>
            <Field name={'password'} type={'password'} component={InputField} label={'Password'}/>
            <Field name={'password2'} type={'password'} component={InputField} label={'Confirm password'}/>
            <div className={styles.button_wrapper}>
                <ButtonNya type="reset" disabled={loading} className={'cancel_button'}>Cancel</ButtonNya>
                <ButtonNya type="submit" disabled={loading} >Submit</ButtonNya>
            </div>
        </Form>
    </div>
);