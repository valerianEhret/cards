import {CardType} from "../../m3-dal/cardsAPI";

export const cardsInitialState = {
    isLoading: true,
    cards: [] as Array<CardType>,
    cardsTotalCount: null as null | number,
    maxGrade: null as null | number,
    minGrade: null as null | number,
    page: null as null | number,
    pageCount: null as null | number,
    packUserId: null as null | string
}

export type CardsInitialStateType = typeof cardsInitialState;