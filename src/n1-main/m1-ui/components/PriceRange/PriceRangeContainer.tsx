import React  from 'react';
import {PriceRange} from "./PriceRange";
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../m2-bll/store';


export const PriceRangeContainer = () => {
    const maxCount = useSelector<AppRootStateType, number>(state=>state.packs.maxCardsCount)
    return (
        <div>
            <PriceRange maxCount={maxCount}/>
        </div>
    )
}


