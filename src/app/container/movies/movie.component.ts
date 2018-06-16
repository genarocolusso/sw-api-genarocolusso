import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { getmoviesService } from '../../services/getmovies.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class movieComponent implements OnInit {
    
    nextmovie =0;
    movies  ;
    personalScores = [
      {'episode_id': 1 , 'score' : 6, 'bgimg': 'sw1.jpg'},
      {'episode_id': 2 , 'score' : 6, 'bgimg': 'sw2.jpg'},
      {'episode_id': 3 , 'score' : 8, 'bgimg': 'sw3.jpg'},
      {'episode_id': 4 , 'score' : 8, 'bgimg': 'sw4.jpg'},
      {'episode_id': 5 , 'score' : 8, 'bgimg': 'sw5.jpg'},
      {'episode_id': 6 , 'score' : 10, 'bgimg': 'sw6.jpg'},
      {'episode_id': 7 , 'score' : 8, 'bgimg': 'sw7.jpg'}
    ]
    constructor(private movieS: getmoviesService,private _sanitizer: DomSanitizer){}
  ngOnInit(){
  
    this.movieS.getMovie().subscribe(data=>{
        this.movies = data;
    })
  
  
  }
  
  nextMovie(){
  
    if(this.nextmovie < this.movies.length-1){
      this.nextmovie += 1;
    }else{ 
      this.nextmovie = 0;
    }
  
  }
  
  setPersonalScore(episode_id){
   let thisscore =  this.personalScores.filter( score => score.episode_id === episode_id)
   
   return thisscore[0]['score'];
  } 
  
  setbbimg(episode_id){
    let response =  this.personalScores.filter( score => score.episode_id === episode_id)
    
    let image = response[0]['bgimg']
  
    return this._sanitizer.bypassSecurityTrustStyle(`url(assets/${image})`);
  
  
   } 
   
}
