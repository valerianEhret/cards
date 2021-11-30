import React, {BaseHTMLAttributes, DetailedHTMLProps} from 'react'
import styles from './SnackBar.module.scss'


export type SnackBarPropsType = DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    message:string
    onClose:()=>void
}


export const SnackBar:React.FC<SnackBarPropsType> = React.memo(({message,className,onClose,...props})=>{

    const finallyClassName = `${styles.root} ${className}`

    return (
        <div className={finallyClassName} {...props}><div>{message}</div><button className={styles.close} onClick={onClose}></button></div>
    )
})