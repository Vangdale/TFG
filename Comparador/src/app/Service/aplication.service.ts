import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor(private http: HttpClient){}

    getData(){
        let url = "https://datagamepi.herokuapp.com/Instant";
        return this.http.get(url);
    }

}