import React, {useState} from 'react'
import styles from './Paginator.module.scss'
import arrow from '../../../../n3-styles/images/arrow.svg'


export type PaginatorPropsType = {
    currentPage: number
    portionSize?: number
    pageSize: number
    totalCount: number
    onPageChange: (pageNumber: number) => void
}

export const Paginator: React.FC<PaginatorPropsType>
    = ({
           portionSize = 5,
           pageSize ,
           totalCount ,
           currentPage ,
           onPageChange
       }) => {

    const pagesCount = Math.ceil(totalCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const min = (portionNumber - 1) * portionSize + 1;
    const max = portionNumber * portionSize


    return <div className={styles.root}>
        {

            <button disabled={portionNumber <= 1} onClick={() => setPortionNumber(portionNumber - 1)}
                    className={`${styles.arrow} ${styles.arrow_left}`}>
                <img src={arrow} alt="LEFT" className={styles.arrow_img}/>
            </button>
        }
        <div style={{display: 'flex'}}>
            {
                pages
                    .filter(p => p >= min && p <= max)
                    .map(p => <div key={p} className={`${styles.page} ${p === currentPage && styles.page__active}`}
                                   onClick={() => onPageChange(p)}>{p}</div>)
            }
            {portionCount > portionNumber && <div style={{marginRight: '12px', marginLeft: '12px'}}>...</div>}
            {portionCount > portionNumber &&
            <div className={`${styles.page} ${pages.length === currentPage && styles.page__active} `} onClick={() => onPageChange(pages.length)}>{pages.length}</div>}
        </div>
            <button disabled={portionCount <= portionNumber} onClick={() => setPortionNumber(portionNumber + 1)}
                 className={`${styles.arrow} ${styles.arrow_right}`}>
                <img src={arrow} alt="RIGHT" className={styles.arrow_img}/>
            </button>
    </div>
}