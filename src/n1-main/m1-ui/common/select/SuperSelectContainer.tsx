import React, {useState} from 'react'
import SuperSelect from "./SuperSelect";



const arr = ['10','15','20']

export const SuperSelectContainer = () => {
    const [value, onChangeOption] = useState(arr[0])
    return (
        <SuperSelect
            options={arr}
            value={value}
            onChangeOption={onChangeOption}
        />
    )
}