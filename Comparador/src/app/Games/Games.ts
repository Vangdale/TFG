export interface IGames {
    title: string;
    link: string;
    price: number;
    Picture: string;
    origen: string;
}

export class Games implements IGames {
    constructor(title: string, link: string, price: number, Picture:string, origen:string) {
        this.title = title;
        this.link = link;
        this.price = price;
        this.Picture = Picture;
        this.origen = origen;
    }
    title: string;
    link: string;
    price: number;
    Picture: string;
    origen: string;
}