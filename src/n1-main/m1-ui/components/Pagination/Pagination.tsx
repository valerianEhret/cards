import React from 'react';
import {SuperSelectContainer} from '../../common/select/SuperSelectContainer';
import {Paginator} from '../../common/c5-Paginator/Paginator';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../m2-bll/store';
import {FindPaginationInitialStateType} from '../../../m2-bll/r5-findPagination/findPaginationInitialState';
import {setCurrentPageTC} from '../../../m2-bll/r5-findPagination/findPaginationThunk';
import styles from './Pagination.module.scss'


export const Pagination = () => {
    const dispatch = useDispatch()
    const {cardPacksTotalCount, pageCount, page} = useSelector<AppRootStateType, FindPaginationInitialStateType>( state=>state.findPagination)

    const changeCurrentPage  = (currentPage:number) => {
        dispatch(setCurrentPageTC(currentPage))
    }

    return (
        <div className={styles.root}>
            <Paginator currentPage={page} pageSize={pageCount} totalCount={cardPacksTotalCount} onPageChange={changeCurrentPage }/>
            Show &#160; <SuperSelectContainer/> &#160; Cards per Page
        </div>
    )
}
