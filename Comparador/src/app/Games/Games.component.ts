import { Component, OnInit } from '@angular/core';
import { GameService } from '../Service/aplication.service';
import { Games } from './Games';


@Component({
    selector: 'list-Games',
    templateUrl: './Games.component.html'
    
    
})
export class GamesListaComponent{

    games: Games[] = [];
}