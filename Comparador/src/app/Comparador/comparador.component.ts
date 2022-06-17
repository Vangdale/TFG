import { Component, OnInit } from '@angular/core';
import { GameService } from '../Service/aplication.service';


@Component({
    selector: 'All_Games',
    templateUrl: './comparador.component.html',
    styleUrls: ['./comparador.component.css']
})
export class GamesComponent implements OnInit{
    title = 'Games';
    data: any;

    constructor(private user: GameService) {
        
    }
    ngOnInit() {
        this.user.getData().subscribe(data => {
            console.warn(data)
            this.data = data;
        })
    }

    gameSearched:String = "....";

    Busqueda(gameSelected: String){
        this.gameSearched = gameSelected;
    }


}
