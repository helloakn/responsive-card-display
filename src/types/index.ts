export type TDic = {
    [key: string]: string | number | Date | TDic | Array<TDic>
}

export type TTag = {
    id: number,
    name: string,
    type: string
}
export type TItem = {
    id: number,
    name: string,
    body: string,
    tags: Array<TTag>
}
export interface IHome {
    data: Array<TItem>
}

export interface ICard {
    name: string;
    body: string;
    tags: Array<TTag>
}