import { Component } from '@angular/core';
import { GameService } from './Service/aplication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comparador';
  data: any;

  constructor(private user: GameService){
    this.user.getData().subscribe( data => {
      console.warn(data)
      this.data = data;
    })
  }
}
