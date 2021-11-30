import React from 'react';
import {useHistory} from 'react-router-dom'


type CardPropsType = {
    id:string
    packUserId: string
    question: string
    answer: string
    updated: string
    grade: number
    createdBy: string
    cardId: string
    cardPackId: string
    myId:string | undefined
    showDeleteCardModal: (cardPackId: string, cardId: string) => void
    showEditCardModal: (cardPackId: string, cardId: string) => void
}

export const Card: React.FC<CardPropsType> = (props) => {


    const showCardDeleteModal = () => {
        props.showDeleteCardModal(props.cardPackId, props.cardId)
    }

    const showCardEditModal = () => {
        props.showEditCardModal(props.cardPackId, props.cardId)
    }

    const history = useHistory();

    const classForDeleteButton = `square_delete__button ${props.packUserId !== props.myId && 'non_active_button'}`;
    const classForEditButton = `square_button ${props.packUserId !== props.myId && 'non_active_button'}`;

    return (
            <tr>
                <td>{props.question}</td>
                <td>{props.answer}</td>
                <td>{props.updated}</td>
                <td>{props.grade}</td>
                <td>
                    <div className={'button_wrapper'}>
                        <button className={'square_button'}
                                onClick={() => history.push(`/learn/${props.id}`)}>Learn
                        </button>
                        <button className={classForDeleteButton} onClick={showCardDeleteModal}>delete</button>
                        <button className={classForEditButton} onClick={showCardEditModal}>edit</button>
                    </div>
                </td>
            </tr>
    );
};
