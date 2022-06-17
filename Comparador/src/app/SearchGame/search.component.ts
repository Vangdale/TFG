import { Component,EventEmitter, Output } from '@angular/core';
import { GameService } from '../Service/aplication.service';


@Component({
    selector: 'Search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    title = 'Games';
    
    @Output()
    globalSelected: EventEmitter<String> = new EventEmitter<String>();

    selectedGame:String = "";

    GameSelection(){
        this.globalSelected.emit(this.selectedGame);
    }

}
