import { Component } from '@angular/core';
import { GameService } from '../Service/aplication.service';


@Component({
    selector: 'GOG_Games',
    templateUrl: './GOG.component.html',
    styleUrls: ['./GOG.component.css']
})
export class GOGComponent {
    title = 'Games from GOG';
    data: any;

    constructor(private user: GameService) {
        this.user.getDataGOG().subscribe(data => {
            console.warn(data)
            this.data = data;
        })
    }
}
