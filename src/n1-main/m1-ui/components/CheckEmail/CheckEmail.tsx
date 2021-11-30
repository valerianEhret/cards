import React from "react";
import styles from './CheckEmail.module.scss'
import email from '../../../../n3-styles/images/email.svg'



export const CheckEmail = () => {
    return (
        <div className={`container flex ${styles.root}`}>
            <div className={'form'}>
                <h2>it-incubator</h2>
                <div className={styles.image_wrapper}>
                    <img src={email} alt={'email'}/>
                </div>
                <div className={styles.title}>Check Email</div>
                <div className={styles.description}>We’ve sent an Email with instructions to example@mail.com</div>
            </div>
        </div>
    )
}