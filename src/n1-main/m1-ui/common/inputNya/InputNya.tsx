import React, {DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';
import classes from "./InputNya.module.css"

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void, error?: string };

export function InputNya(props: InputNyaPropsType) {
    const {onEnter, error, ...restProps} = props;
    const style = props.error ? `${classes.inputNya} ${classes.error}` : `${classes.inputNya}`


    return (
        <>
            <input onKeyPress={props.onEnter}   className={style}
                   {...restProps}
                   type="text"/>
            <span className={classes.errorMessage}>{error}</span>
        </>
    );
};