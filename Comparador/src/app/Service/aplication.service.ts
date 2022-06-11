import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Games } from "../Games/Games";

@Injectable()
export class SeguridadSocialService {

    constructor(private _http: HttpClient){}

    getGamesWeb1(): Observable<Games[]>{
        const path = "http://localhost:8080/Instant";
        return this._http.get<Games[]>(path);
    }

}