import React from 'react'
import {Field, Form, FormikProps} from 'formik';
import {InputField} from '../../../../n1-main/m1-ui/common/alternative/InputField/InputField';
import {ButtonNya} from '../../common/alternative/Button/ButtonNya';
import styles from './NewPassword.module.scss'


type NewPasswordPropsType = FormikProps<any> & {
    error: null | string
    loading: boolean
}

export const NewPassword: React.FC<NewPasswordPropsType> = (props) => (
    <div className={`container flex ${styles.root}`}>
        <Form className={'form'} onSubmit={props.handleSubmit}
              style={{width: 400, display: 'flex', flexDirection: 'column'}}>
            <h2>it-incubator</h2>
            <h3>Create new password</h3>

            <Field name={'password'} type={'password'} label={'Password'} component={InputField}/>
            <div className={styles.description}>Create new password and we will send you further instructions to email</div>

            <ButtonNya type="submit" disabled={props.loading}>
                Submit
            </ButtonNya>
        </Form>
        <div>{props.error}</div>

    </div>
)
