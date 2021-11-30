import React, {useState} from 'react';
import {Range, getTrackBackground} from 'react-range';
import {useDispatch} from "react-redux";
import {setMinMaxTC} from '../../../m2-bll/r5-findPagination/findPaginationThunk';



export type PriceRangePropsType = {
    maxCount?:number
    minCount?:number
}


export const PriceRange: React.FC<PriceRangePropsType> = ({maxCount = 100, minCount= 0}) => {
    const dispatch = useDispatch()

    const [values, setValues] = useState([minCount, maxCount]);


    const rangeValuesHandler = (values:Array<number>) => {
        setValues(values)
       dispatch(setMinMaxTC(values[0], values[1]))
    }

    return (
        <Range
            values={values}
            step={1}
            min={minCount}
            max={maxCount}
            onChange={rangeValuesHandler}
            renderTrack={({props, children}) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: '36px',
                        display: 'flex',
                        width: '100%'
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '100%',
                            borderRadius: '4px',
                            background: getTrackBackground({
                                values: values,
                                colors: ['#9093c7', '#21268F', '#9093c7'],
                                min: 0,
                                max: 100
                            }),
                            alignSelf: 'center'
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({index, props, isDragged}) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '16px',
                        width: '16px',
                        outline: 'none',
                        borderRadius: '50%',
                        backgroundColor: '#FFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // boxShadow: '0px 2px 6px #AAA',
                        border: '#21268F'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '-28px',
                            color: '#fff',
                            fontWeight: 'bold',
                            lineHeight: '17px',
                            fontSize: '14px',
                            fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                            padding: '4px 5px',
                            borderRadius: '4px',
                            backgroundColor: '#21268F'
                        }}
                    >
                        {values[index].toFixed(0)}
                    </div>
                    <div
                        style={{
                            height: '16px',
                            width: '16px',
                            borderRadius: '50%',
                            backgroundColor: '#ffffff',
                            border: '4px solid #21268F',
                        }}
                    />
                </div>
            )}
        />
    );
};

