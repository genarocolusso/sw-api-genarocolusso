import { Component, OnInit } from '@angular/core';
import { getmoviesService } from './services/getmovies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  movies ;

  constructor(private movieS: getmoviesService){}
ngOnInit(){

  this.movieS.getMovie().subscribe(data=>{
      this.movies = data;
  })

}
}
