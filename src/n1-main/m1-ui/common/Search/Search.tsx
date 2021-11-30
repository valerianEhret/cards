import React, {ChangeEvent} from 'react';
import styles from './Search.module.scss'
import search from '../../../../n3-styles/images/Search.svg'

type SearchPropsType = {
    productName:string
    doSearch:()=>void
    inputValueHandler:(e:ChangeEvent<HTMLInputElement>)=>void
}

export const Search:React.FC<SearchPropsType> = ({productName,inputValueHandler,doSearch})=>{

    // const dispatch = useDispatch()
    // const productName = useSelector<AppRootStateType, string>(state=> state.findPagination.productName)
    //
    //
    // const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     dispatch(SetProductNameTC(e.currentTarget.value))
    // }
    //
    // const doSearch = () => {
    //     dispatch(getCardPacks())
    // }

    return (
        <label className={styles.root}>
            <button onClick={doSearch} className={styles.btn}><img src={search} alt=""/></button>
            <input placeholder={'Search...'} className={styles.input} type="text" value={productName} onChange={inputValueHandler} />
        </label>
    )
}