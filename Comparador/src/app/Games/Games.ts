export interface IGames {
    Title: string;
    Link: string;
    Price: number;
    Picture: string;
    Origin: string;
}

export class Games implements IGames {
    constructor(Title: string, Link: string, Price: number, Picture:string, Origin:string) {
        this.Title = Title;
        this.Link = Link;
        this.Price = Price;
        this.Picture = Picture;
        this.Origin = Origin;
    }
    Title: string;
    Link: string;
    Price: number;
    Picture: string;
    Origin: string;
}