import React, {DetailedHTMLProps} from 'react';
import style from './Pack.module.css';
import {NavLink, useHistory} from 'react-router-dom';


type PackPropsType = DetailedHTMLProps<any, any> & {
    name: any
    cardsCount: any
    lastUpdated: any
    userName: any
    user_id: string
    userAuthId: string | null
    id: string
    setPackId: (id: string) => void
    setModalDeletePackActive: (active: boolean) => void
    setModalEditPackActive: (active: boolean) => void
    setEditablePackId: (id: string) => void
}

export const Pack: React.FC<PackPropsType> = (
    {
        name,
        cardsCount,
        lastUpdated,
        userName,
        id,
        setPackId,
        setModalDeletePackActive,
        setModalEditPackActive,
        setEditablePackId,
        user_id,
        userAuthId,
        className

    }) => {
    lastUpdated = lastUpdated.slice(0, 10).split('-').reverse().join('.')


    const history = useHistory()

    const deletePack = () => {
        setModalDeletePackActive(true)
        setPackId(id)
    }

    const showEditPackModal = () => {
        setModalEditPackActive(true)
        setEditablePackId(id)
    }
    return (
        <tr className={`${style.pack} ${className}`}>
            <td>
                <NavLink to={`cards/${id}`}>{name}</NavLink>
            </td>
            <td>{cardsCount}</td>
            <td>{lastUpdated}</td>
            <td>{userName}</td>
            <td>
                <div className={'button_wrapper'}>
                    <button className={'square_button'} disabled={!cardsCount}
                            onClick={() => history.push(`learn/${id}`)}>Learn
                    </button>
                    <button className={`square_delete__button ${user_id !== userAuthId && 'non_active_button'}`}
                            onClick={deletePack}>Delete
                    </button>
                    <button className={`square_button ${user_id !== userAuthId && 'non_active_button'}`}
                            onClick={showEditPackModal}>Edit
                    </button>
                </div>
            </td>
        </tr>
    );
}
