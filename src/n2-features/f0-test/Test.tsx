import React, {useState} from 'react'
import {Paginator} from '../../n1-main/m1-ui/common/c5-Paginator/Paginator';
import {Sort} from "../../n1-main/m1-ui/common/Sort/Sort";
import {CardsSwitch} from "../../n1-main/m1-ui/components/CardsSwitch/CardsSwitch";

export const Test = () => {
    const [p,setP] = useState(1)
    return(
        <div>
            <Paginator currentPage={p} pageSize={10} totalCount={131} onPageChange={(p)=> setP(p)}/>
            <Sort sortObject={'updated'}/>
            <CardsSwitch/>
        </div>

    )
}