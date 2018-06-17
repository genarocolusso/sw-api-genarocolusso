import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { movieComponent } from './container/movies/movie.component';
import { peopleComponent } from './container/people/people.component';

import { characterService } from './services/character.service'; 
import { getmoviesService } from './services/getmovies.service';

@NgModule({
  declarations: [
    AppComponent,
    movieComponent,
    peopleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule 
  ],
  providers: [getmoviesService,characterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
