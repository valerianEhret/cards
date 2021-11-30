import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import classes from "./CardsButton.module.css"

type CardsButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> & {title:string}

export function CardsButton (props: CardsButtonPropsType) {
    return <button className={classes.buttonCards}{...props} >{props.title}</button>
}