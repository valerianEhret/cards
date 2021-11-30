import {instance} from './axios';


export type GetCardsResponseType = {
    cards:Array<CardType>,
    cardsTotalCount:number,
    maxGrade:number,
    minGrade:number,
    packUserId:string,
    page:number,
    pageCount:number,
    token:number,
    tokenDeathTime:number
}


export type CommonResponseType = {
    token:string,
    tokenDeathTime:number
}

export type CardType = {
    answer: string
    cardsPack_id: string
    comments?: string
    created: string
    updated: string
    grade: number
    more_id: string
    question: string
    rating: number
    shots: number
    user_id?: string
    _id: string
    __v:number
}


export interface ChangeGradeResponseType extends Omit<CardType, 'answer' | 'comments' | 'question' | 'rating'>  {
    cards_id:string
}


export type CardTypeForEdit = {
    _id?: string
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: string
    shots?: string
    rating?: string
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    type?: string
}

export type ParamsForCardFetching = {
    cardsPack_id: string,
    cardQuestion?: string,
    cardAnswer?: string,
    min?: string,
    max?: string,
    sortCards?: string,
    page?: string,
    pageCount?: string
}




export const cardsAPI = {
    getCards: async (params: ParamsForCardFetching) => {
        const response = await instance.get<GetCardsResponseType>(`cards/card`, {params: {...params}});
        return response.data
    },
    deleteCard: async (id: string) => {
        const response = await instance.delete<CommonResponseType & {deletedCard:CardType}>(`cards/card?id=${id}`);
        return response.data
    },
    createNewCard: async (card: CardTypeForEdit) => {
        const response = await instance.post<CommonResponseType & {newCard:CardType}>(`cards/card`, {card});
        return response.data
    },
    editCard: async (card: CardTypeForEdit) => {
        const response = await instance.put<CommonResponseType & {newCard:CardType}>(`cards/card`, {card});
        return response.data
    },
    changeGradeCard: async (grade:number, card_id:string) => {
        const response = await instance.put<CommonResponseType & { updatedGrade: ChangeGradeResponseType }>(`cards/grade`, {grade,card_id })
        return response.data
    }
}