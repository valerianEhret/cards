import React from 'react';
import styles from './Bacdrop.module.scss'


export const Backdrop:React.FC = React.memo(({children})=> {
    return <div className={styles.root}>
        {children}
    </div>
})