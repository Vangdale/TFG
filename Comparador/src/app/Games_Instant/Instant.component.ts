import { Component } from '@angular/core';
import { GameService } from '../Service/aplication.service';


@Component({
    selector: 'Instant_Games',
    templateUrl: './Instant.component.html',
    styleUrls: ['./Instant.component.css']
})
export class InstantComponent {
    title = 'Games from Instant Gaming';
    data: any;

    constructor(private user: GameService) {
        this.user.getDataInstant().subscribe(data => {
            console.warn(data)
            this.data = data;
        })
    }
}
