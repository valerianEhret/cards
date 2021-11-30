import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {setSortTC} from '../../../m2-bll/r5-findPagination/findPaginationThunk';
import styles from './Sort.module.scss'

type SortType = {
    sortObject:string
}



export const Sort = (props:SortType)=> {

    const dispatch = useDispatch()
    const [dir,setDir] = useState(false)

    const sortUp = () => {
        setDir(false)
        dispatch( setSortTC(1, props.sortObject ) )
    }

    const sortDown = () => {
        setDir(true)
        dispatch( setSortTC(0, props.sortObject ) )
    }

    return (
        <div>
            {dir && <div onClick={sortUp} className={styles.up}></div>}
            {!dir && <div onClick={sortDown} className={styles.down}></div>}
        </div>
    )
}