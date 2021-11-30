import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react'
import {useDispatch} from "react-redux";
import {setPageCountTC} from '../../../m2-bll/r5-findPagination/findPaginationThunk';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, className,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const dispatch = useDispatch()

    const mappedOptions: any[] = options ? options.map((o, i) => {
       return <option key={o + '-' + i} value={o}>{o}</option>
    }) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
        dispatch(setPageCountTC(+e.currentTarget.value) )
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect