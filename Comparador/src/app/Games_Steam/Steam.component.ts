import { Component } from '@angular/core';
import { GameService } from '../Service/aplication.service';


@Component({
    selector: 'Steam_Games',
    templateUrl: './Steam.component.html',
    styleUrls: ['./Steam.component.css']
})
export class SteamComponent {
    title = 'Games from Steam';
    data: any;

    constructor(private user: GameService) {
        this.user.getDataSteam().subscribe(data => {
            console.warn(data)
            this.data = data;
        })
    }
}
