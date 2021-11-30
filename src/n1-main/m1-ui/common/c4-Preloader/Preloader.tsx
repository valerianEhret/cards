import React from 'react'
import styles from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={styles.overlay_loader}>
            <div className={styles.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}