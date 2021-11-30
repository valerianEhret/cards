import {instance} from './axios';
import {CommonResponseType} from './cardsAPI';

export type PackType = {
    _id: string,
    user_id: string,
    user_name: string,
    private: boolean,
    name: string,
    path: string,
    grade: number,
    shots: number,
    cardsCount: number,
    type: string,
    rating: number,
    created: string,
    updated: string,
    more_id: string,
    __v: number
}
export type GetCardPacksResponseType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number,
    minCardsCount: number,
    maxCardsCount: number
    page: number,
    pageCount: number,

}


export type ParametersForCreatePackType = {
    name?: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: string
    private?: boolean
    type?: string
}

export type ParametersForGetPacksType = {
    packName: string
    min: number
    max: number
    pageCount: number
    page: number
    direction: number
    sortObject: string
}

export const packsAPI = {
    getCardPacks: async (productName: string, minPrice:number, maxPrice:number, pageCount:number, page:number, direction:number, sortObject:string, user_id?:string) => {
        const response = await instance.get<CommonResponseType & GetCardPacksResponseType>(`cards/pack?packName=${productName}&min=${minPrice}&max=${maxPrice}&sortPacks=${direction}${sortObject}&page=${page}&pageCount=${pageCount}&user_id=${user_id}`);
        return response.data
    },
    addNewPack: async (params: ParametersForCreatePackType) => {
        const response = await instance.post<CommonResponseType & {newCardsPack : PackType}>(`cards/pack`, {cardsPack: params});
        return response.data
    },
    deleteCardPack: async (id: string) => {
        const response = await instance.delete<CommonResponseType & {deletedCardsPack : PackType}>(`cards/pack?id=${id}`);
        return response.data
    },
    editCardPack: async (pack: PackType) => {
        const response = await instance.put<CommonResponseType & {updatedCardsPack : PackType}>(`cards/pack`, {cardsPack: pack})
        return response.data
    }
}