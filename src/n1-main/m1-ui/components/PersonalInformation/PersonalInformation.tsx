import React from 'react'
import {Field, Form, FormikProps} from 'formik';
import {InputField} from '../../common/alternative/InputField/InputField';
import {ButtonNya} from '../../common/alternative/Button/ButtonNya';
import styles from './PersonalInformation.module.scss'
import avatar from '../../../../n3-styles/images/avatar.png'

type PersonalInformationPropsType = FormikProps<any> & {
    error?: string,
    loading?: boolean
}

export const PersonalInformation:React.FC<PersonalInformationPropsType> = React.memo(({handleSubmit,handleReset,loading})=>{
    return (
        <div className={`${styles.root} container flex`}>
            <Form className={'form'} onSubmit={handleSubmit} onReset={handleReset}>
                <div className={styles.img_wrapper}>
                    <img className='img' src={avatar} alt=""/>
                </div>
                <h3>Personal Information</h3>
                <Field name={'name'}  component={InputField} label={'NickName'}/>
                <div className='button_wrapper'>
                    <ButtonNya type="reset" disabled={loading} className={'cancel_button'}>Cancel</ButtonNya>
                    <ButtonNya type="submit" disabled={loading} >Submit</ButtonNya>
                </div>
            </Form>
        </div>
    )
})
