import { IArtist } from "./artist.model";

export interface IArtistEvent {
    artist?: IArtist,
    id: string,
    artist_id: string,
    url: string,
    on_sale_datetime: string,
    datetime: string,
    description: string,
    venue: any,
    offers: any[],
    lineup: any[]
}