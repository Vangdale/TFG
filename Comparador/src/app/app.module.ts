import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InstantComponent } from './Games_Instant/Instant.component';
import { Routes, RouterModule } from '@angular/router';
import { SteamComponent } from './Games_Steam/Steam.component';
import { GOGComponent } from './Games_GOG/GOG.component';
import { SearchComponent } from './SearchGame/search.component';
import { GamesComponent } from './Comparador/comparador.component';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,InstantComponent, SteamComponent, GOGComponent, SearchComponent, GamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
