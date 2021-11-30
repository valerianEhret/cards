import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './ButtonNya.module.scss'


type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export const ButtonNya: React.FC<ButtonNyaPropsType> = ({className, ...props}) => {


    const finalClassName = `${styles.buttonNya} ${className}`


    return (
        <>
            <button className={finalClassName} {...props} />
        </>
    );
};