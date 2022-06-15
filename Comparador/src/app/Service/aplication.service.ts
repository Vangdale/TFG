import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor(private http: HttpClient){}

    getData(){
        let url = "https://datagamepi.herokuapp.com";
        return this.http.get(url);
    }

    getDataInstant(){
        let url = "https://datagamepi.herokuapp.com/Instant";
        return this.http.get(url);
    }

    getDataSteam(){
        let url = "https://datagamepi.herokuapp.com/Steam";
        return this.http.get(url);
    }

    getDataGOG(){
        let url = "https://datagamepi.herokuapp.com/GOG";
        return this.http.get(url);
    }

}