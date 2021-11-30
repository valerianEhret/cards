import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {FieldProps} from 'formik';
import styles from './CheckBox.module.scss'


type CheckBoxPropsType = FieldProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type?: string
}

export const CheckBox: React.FC<CheckBoxPropsType> =
    ({
         field, // { name, value, onChange, onBlur }
         form: {touched, errors,values}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc,
         type,
        className,
         ...props
     }) => {
        const finalClassName = `${styles.checkbox} ${className}`
        return (
                <input type='checkbox' className={finalClassName} {...field} {...props}/>
        )
    }