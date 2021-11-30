import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {getCards, gradeCardTC} from '../../../m2-bll/r4-cards/cardsThunk';
import {CardType} from '../../../m3-dal/cardsAPI';
import {ButtonNya} from '../../common/alternative/Button/ButtonNya';
import {AppRootStateType} from '../../../m2-bll/store';
import styles from './Learn.module.scss';
import {Preloader} from '../../common/c4-Preloader/Preloader';
import {Backdrop} from '../../common/Backdrop/Backdrop';
import SuperCheckbox from '../../common/c3-SuperCheckbox/SuperCheckbox';
import {IUser} from '../../../m2-bll/r2-auth/authInitState';
import {WithAuthRedirect} from '../../../../n4-hoc/WithAuthRedirect';

const grades = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer'];

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});

    return cards[res.id + 1];
}

const LearnPageContainer = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    const {cards,isLoading} = useSelector((store: AppRootStateType) => store.cards);
    const user = useSelector<AppRootStateType, IUser | null>(state=> state.auth.user)
    const {id} = useParams<{id:string}>();
    const history = useHistory()
    const [isBtnChecked, setIsBtnChecked] = useState(0)
    const onRadioHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setIsBtnChecked(+e.currentTarget.value)
    }

    const [card, setCard] = useState<CardType>({} as CardType);


    const dispatch = useDispatch();
    useEffect(() => {
        if (first && user?._id) {
            dispatch(getCards(id));
            setFirst(false);
        }
        if (cards !== null && cards.length > 0) setCard(getCard(cards));

    }, [dispatch, id, cards, first, user?._id]);


    const gradeCard = (grade:number, id:string) => {
            dispatch(gradeCardTC(grade, card._id))
    }



    const onNext = () => {
        const grade = isBtnChecked + 1
        setIsChecked(false);

        if (cards !== null  && cards.length > 0) {
            gradeCard(grade, id)
            setCard(getCard(cards));
        } else {

        }
    }

    if(isLoading) return <Backdrop><Preloader/></Backdrop>

    return (
        <div className={`container flex ${styles.root}`}>
            {!isChecked && <div className={`form ${styles.learn_form}`}>
                <h2 className={styles.title}>Title</h2>
                <div className={styles.description_wrapper}>
                    <div className={styles.description}><div className={styles.description_title}>Question: </div><div>{card.question}</div></div>
                </div>

                <div className={'button_wrapper'}>
                    <ButtonNya className={'cancel_button'} onClick={()=>history.push('/packs')}>Cancel</ButtonNya>
                    <ButtonNya onClick={() => setIsChecked(true)}>Show answer</ButtonNya>
                </div>

            </div>
            }

            {isChecked && (
                <div className={`form ${styles.learn_form}`}>
                    <h2 className={styles.title}>Title</h2>
                    <div className={styles.description_wrapper}>
                        <div className={styles.description}><div className={styles.description_title}>Question: </div><div>{card.question}</div></div>
                        <div className={styles.description}><div className={styles.description_title}>Answer: </div><div>{card.answer}</div></div>
                    </div>


                    <div className={styles.rate}>
                        <div className={styles.title}>
                            Rate yourself:
                        </div>

                        {grades.map((g, i) => (
                            <SuperCheckbox className={styles.radio_btn} checked={i === isBtnChecked} name={'rate'} value={i} key={'grade-' + i} onChange={onRadioHandler}>{g}</SuperCheckbox>
                        ))}

                    </div>


                    <div className={'button_wrapper'}>
                        <ButtonNya className={'cancel_button'} onClick={()=>history.push('/packs')}>Cancel</ButtonNya>
                        <ButtonNya onClick={onNext}>Next</ButtonNya>
                    </div>
                </div>
            )}
        </div>
    );
};

export default  LearnPageContainer;


export const LearnPage = () => {
    return (
        <WithAuthRedirect><LearnPageContainer/></WithAuthRedirect>
    )
}