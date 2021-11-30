import React, {ChangeEvent, useEffect, useState} from 'react';
import {Card} from './Card';
import style from '../Packs/Packs.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, Redirect, useParams} from 'react-router-dom';
import {addNewCard, deleteCard, editCard, getCards} from '../../../m2-bll/r4-cards/cardsThunk';
import {AppRootStateType} from '../../../m2-bll/store';
import {Preloader} from '../../common/c4-Preloader/Preloader';
import {WithAuthRedirect} from '../../../../n4-hoc/WithAuthRedirect';
import {CardsInitialStateType} from '../../../m2-bll/r4-cards/cardsInitialState';
import styles from './CardsTable.module.scss'
import arrow from '../../../../n3-styles/images/long_arrow.svg'
import {IUser} from '../../../m2-bll/r2-auth/authInitState';
import {ButtonNya} from '../../common/alternative/Button/ButtonNya';
import {PackModal} from "../Packs/PackModal";

const CardsTableContainer = React.memo(() => {

    const [cardQuestion, setCardQuestion] = useState<string>('');
    const [cardAnswer, setCardAnswer] = useState<string>('');
    const [modalCardAddActive, setModalCardAddActive] = useState<boolean>(false);
    const [modalCardEditActive, setModalCardEditActive] = useState<boolean>(false);
    const [modalCardDeleteActive, setModalCardDeleteActive] = useState<boolean>(false);
    const [cardPackId, setCardPackId] = useState<string>('')
    const [cardId, setCardId] = useState<string>('')

    const dispatch = useDispatch();

    const {cards, isLoading,packUserId} = useSelector<AppRootStateType, CardsInitialStateType>(state => state.cards)
    const user = useSelector<AppRootStateType,IUser | null>(state=>state.auth.user)
    const {id} = useParams<{ id: string }>()

    useEffect(() => {
        dispatch(getCards(id))
    }, [dispatch, id])

    if (isLoading) {
        return <Preloader/>
    }

    if(!packUserId){
        return <Redirect to={'/packs'}/>
    }

    const changeCardQuestionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCardQuestion(e.currentTarget.value)
    }

    const changeCardAnswerHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCardAnswer(e.currentTarget.value)
    }

    const showAddCardModal = () => {
        setModalCardAddActive(true)
    }

    const showDeleteCardModal = (cardPackId: string, cardId: string) => {
        setModalCardDeleteActive(true)
        setCardId(cardId);
        setCardPackId(cardPackId)
    }

    const showEditCardModal = (cardPackId: string, cardId: string) => {
        setModalCardEditActive(true)
        setCardId(cardId);
        setCardPackId(cardPackId)
    }

    const sendEditCardInfo = () => {
        dispatch(editCard({question: cardQuestion, answer: cardAnswer, cardsPack_id: cardPackId, }, cardId))
        setCardId('');
        setCardPackId('');
        setCardAnswer('');
        setCardQuestion('');
        setModalCardEditActive(false)
    }

    const removeCard = () => {
        dispatch(deleteCard(cardPackId, cardId))
        setCardId('');
        setCardPackId('');
        setModalCardDeleteActive(false);
    }

    const addCard = () => {
        dispatch(addNewCard({cardsPack_id: id, question: cardQuestion, answer: cardAnswer}, id))
        setCardAnswer('');
        setCardQuestion('');
        setModalCardAddActive(false)
    }
    return (
        <div className={`container ${styles.container}`}>
            <div className={`${styles.root}`}>
                <h2>
                    <NavLink to={'/packs'}><img className={styles.img} src={arrow} alt=""/>
                        Pack Name
                    </NavLink>
                </h2>
                { packUserId === user?._id && <div className={styles.btn}>
                    <ButtonNya onClick={showAddCardModal}>
                        Add new card</ButtonNya></div>}
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th >Question</th>
                        <th >Answer</th>
                        <th >Last Updated</th>
                        <th >Grade</th>
                        <th >Actions</th>
                    </tr>
                    </thead>
                    <tbody className={style.packsTable}>
                    {cards.length !== 0
                        ? cards.map(c => {
                            return (
                                <Card key={c._id}
                                      cardId={c._id}
                                      packUserId={packUserId}
                                      cardPackId={c.cardsPack_id}
                                      question={c.question}
                                      answer={c.answer}
                                      updated={c.updated}
                                      grade={c.grade}
                                      createdBy={'some user'}
                                      myId={user?._id}
                                      id={id}
                                      showDeleteCardModal={showDeleteCardModal}
                                      showEditCardModal={showEditCardModal}
                                />
                            )
                        })
                        : <div style={{textAlign: 'center', fontWeight: 'bold'}}> Карточек пока нет</div>}
                    </tbody>
                </table>
            </div>

            <PackModal active={modalCardAddActive} setActive={setModalCardAddActive}>
                <div>Add New Card</div>
                <div>Card question</div>
                <input
                    type={'text'}
                    placeholder={'Type new card question...'}
                    value={cardQuestion}
                    onChange={changeCardQuestionHandler}/>
                <div>Card answer</div>
                <input
                    type={'text'}
                    placeholder={'Type new card answer...'}
                    value={cardAnswer}
                    onChange={changeCardAnswerHandler}/>
                <div>
                    <button onClick={() => setModalCardAddActive(false)}>Cancel</button>
                    <button onClick={addCard}>Save</button>
                </div>
            </PackModal>

            <PackModal active={modalCardDeleteActive} setActive={setModalCardDeleteActive}>
                <div>Delete Card</div>
                <div>Do you really want to remove this Card?</div>

                <div>
                    <button onClick={() => setModalCardDeleteActive(false)}>Cancel</button>
                    <button onClick={removeCard}>Delete</button>
                </div>
            </PackModal>

            <PackModal active={modalCardEditActive} setActive={setModalCardEditActive}>
                <div>Edit Card</div>
                <div>Card question</div>
                <input
                    type={'text'}
                    placeholder={'Type new card question...'}
                    value={cardQuestion}
                    onChange={changeCardQuestionHandler}/>
                <div>Card answer</div>
                <input
                    type={'text'}
                    placeholder={'Type new card answer...'}
                    value={cardAnswer}
                    onChange={changeCardAnswerHandler}/>
                <div>
                    <button onClick={() => setModalCardEditActive(false)}>Cancel</button>
                    <button onClick={sendEditCardInfo}>Save</button>
                </div>
            </PackModal>
        </div>

    );
})


export const CardsTable = () => {
    return (
        <WithAuthRedirect>
            <CardsTableContainer/>
        </WithAuthRedirect>
    )
}

