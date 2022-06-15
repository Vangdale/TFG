import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InstantComponent } from './Games_Instant/Instant.component';
import { Routes, RouterModule } from '@angular/router';
import { SteamComponent } from './Games_Steam/Steam.component';
import { GOGComponent } from './Games_GOG/GOG.component';


import { AppComponent } from './app.component';

const appRutas: Routes = [
  {path: 'Instant', component: InstantComponent},
  {path: 'Steam', component: SteamComponent},
  {path: 'GOG', component: GOGComponent}

];

@NgModule({
  declarations: [
    AppComponent,InstantComponent, SteamComponent, GOGComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRutas)
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
