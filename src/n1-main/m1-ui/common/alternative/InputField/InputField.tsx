import React, {DetailedHTMLProps} from 'react';
import {FieldProps} from 'formik';
import styles from './inputField.module.scss'

type InputFieldPropsType = FieldProps & DetailedHTMLProps<any,any> & {
    type?: string
    placeholder?: string
    label?:string
}

export const InputField: React.FC<InputFieldPropsType> =
    ({
         field, // { name, value, onChange, onBlur }
         form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc,
         type,
         placeholder,
        label,
        className,
         ...props
     }) => {


        const errorMsg = touched[field.name] && errors[field.name]
        return (
            <label className={`${styles.label}`}>
                <div className={`${styles.title}`}>{label}</div>
                <div className={`${styles.input_wrapper}  ${errorMsg && styles.error}`}>
                    <input className={`${styles.input}`} type={type} placeholder={placeholder} {...field} {...props}/>
                </div>
                {errorMsg && <div className={styles.error}>{errorMsg}</div>}
            </label>

        )
    }
