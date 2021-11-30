import React, {ChangeEvent} from 'react';
import {Search} from './Search';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../m2-bll/store';
import {getCardPacks} from '../../../m2-bll/r3-packs/packsThunk';
import {SetProductNameTC} from '../../../m2-bll/r5-findPagination/findPaginationThunk';


export const SearchContainer = () => {

    const dispatch = useDispatch()
    const productName = useSelector<AppRootStateType, string>(state => state.findPagination.productName)


    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetProductNameTC(e.currentTarget.value))
    }

    const doSearch = () => {
        dispatch(getCardPacks())
    }


    return (

        <Search productName={productName} doSearch={doSearch} inputValueHandler={inputValueHandler}/>
    )
}