import React, {ChangeEvent, useEffect, useState} from 'react';
import {Pack} from "./Pack";
import {useDispatch, useSelector} from "react-redux";
import {PacksInitialStateType} from "../../../m2-bll/r3-packs/packsInitialState";
import {AppRootStateType} from "../../../m2-bll/store";
import {addNewCardPack, deleteCardPack, editCardsPack, getCardPacks} from "../../../m2-bll/r3-packs/packsThunk";
import {PriceRangeContainer} from "../PriceRange/PriceRangeContainer";
import {Pagination} from "../Pagination/Pagination";
import {Sort} from "../../common/Sort/Sort";
import {PackModal} from "./PackModal";
import {Preloader} from '../../common/c4-Preloader/Preloader';
import {CardsSwitch} from "../CardsSwitch/CardsSwitch";
import styles from './Packs.module.scss'
import {Backdrop} from '../../common/Backdrop/Backdrop';
import {ButtonNya} from '../../common/alternative/Button/ButtonNya';
import {SearchContainer} from '../../common/Search/SearchContainer';


export const Packs = () => {

    const [modalDeletePackActive, setModalDeletePackActive] = useState<boolean>(false);
    const [modalAddPackActive, setModalAddPackActive] = useState<boolean>(false);
    const [modalEditPackActive, setModalEditPackActive] = useState<boolean>(false);
    const [editablePackID, setEditablePackId] = useState<string>('')
    const [newPackName, setNewPackName] = useState<string>('');
    const [deletedPackId, setDeletedPackId] = useState<string>('');

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getCardPacks())
    }, [dispatch])


    const {cardPacks, isLoading} = useSelector<AppRootStateType, PacksInitialStateType>(state => state.packs);
    const userAuthId = useSelector<AppRootStateType, string | null>(state => state.auth.user
        ? state.auth.user._id : null) ;


    const addNewPack = () => {
        dispatch(addNewCardPack({name: newPackName}))
        setNewPackName('')
        setModalAddPackActive(false);
    }

    const deletePack = () => {
        dispatch(deleteCardPack(deletedPackId))
        setModalDeletePackActive(false)
    }

    const changeNewPackNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPackName(e.currentTarget.value)
    }

    const editPack = () => {
        dispatch(editCardsPack(editablePackID, newPackName))
        setNewPackName('')
        setModalEditPackActive(false)
    }

    return (
        <>
            {isLoading && <Backdrop><Preloader/></Backdrop>}
            <div className={`container ${styles.packs_container}`}>
                <div className={styles.description_block}>
                    <div className={styles.switch}>
                        <CardsSwitch/>
                    </div>
                    <div>
                        <div className={styles.range_title}>Number of cards</div>
                        <PriceRangeContainer/>
                    </div>
                </div>
                <div className={styles.packs_block}>
                    <h2 className={styles.packs_title}>PacksList</h2>
                    <div className={styles.block_controls}>
                        <div className={styles.search_wrapper}>
                            <SearchContainer/>
                        </div>
                        <ButtonNya onClick={() => setModalAddPackActive(true)}>
                            Add new pack
                        </ButtonNya>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr >
                                <th>Name</th>
                                <th >Cards
                                </th>
                                <th>Last Updated
                                    <Sort sortObject={'updated'}/>
                                </th>
                                <th >Created by</th>
                                <th >Actions</th>
                            </tr>
                        </thead>
                        <tbody className={styles.spreadsheet_info}>
                            {cardPacks.map(cp => {
                                return (<Pack key={cp._id}
                                              name={cp.name}
                                              cardsCount={cp.cardsCount}
                                              lastUpdated={cp.updated}
                                              userName={cp.user_name}
                                              id={cp._id}
                                              userAuthId={userAuthId}
                                              user_id={cp.user_id}
                                              setPackId={setDeletedPackId}
                                              setModalDeletePackActive={setModalDeletePackActive}
                                              setModalEditPackActive={setModalEditPackActive}
                                              setEditablePackId={setEditablePackId}
                                              className={styles.packs_row}
                                />)
                            })}
                        </tbody>
                    </table>
                    <Pagination/>
                </div>

                <PackModal active={modalDeletePackActive} setActive={setModalDeletePackActive}>
                    <div>Delete Pack</div>
                    <div>Do you really want to remove Pack Name - Name Pack?
                        All cards will be excluded from this course.
                    </div>
                    <div>
                        <button onClick={() => setModalDeletePackActive(false)}>Cancel</button>
                        <button onClick={deletePack}>Delete</button>
                    </div>
                </PackModal>

                <PackModal active={modalAddPackActive} setActive={setModalAddPackActive}>
                    <div>Add New Pack</div>
                    <div>New pack name</div>
                    <input
                        type={'text'}
                        placeholder={'Type new pack name...'}
                        value={newPackName}
                        onChange={changeNewPackNameHandler}/>
                    <div>
                        <button onClick={() => setModalAddPackActive(false)}>Cancel</button>
                        <button onClick={addNewPack}>Save</button>
                    </div>
                </PackModal>
                <PackModal active={modalEditPackActive} setActive={setModalEditPackActive}>
                    <div>Add New Pack</div>
                    <div>Edit pack name</div>
                    <input
                        type={'text'}
                        placeholder={'Type new pack name...'}
                        value={newPackName}
                        onChange={changeNewPackNameHandler}/>
                    <div>
                        <button onClick={() => setModalEditPackActive(false)}>Cancel</button>
                        <button onClick={editPack}>Save</button>
                    </div>
                </PackModal>
            </div>
        </>
    );
}
