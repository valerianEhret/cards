import React from 'react';
import styles from './PackModal.module.css'

type PackModalPropsType = {
    active: boolean
    setActive: (active: boolean) => void
    children: React.ReactNode
}


export const PackModal: React.FC<PackModalPropsType> = ({active, children, setActive}) => {

    const classForModal = active ? `${styles.modal} ${styles.active}` : `${styles.modal}`;
    const classForModalContent = active ? `${styles.modalContent} ${styles.active}` : `${styles.modalContent}`;

    const setModalActive = () => {
        setActive(false)
    }



    return (
        <div className={classForModal} onClick={setModalActive} >
            <div className={classForModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

