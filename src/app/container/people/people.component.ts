import { Component, OnInit, Input, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { characterService } from '../../services/character.service';

@Component({
    selector: 'people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss']
})
export class peopleComponent implements OnChanges {

    @Input() movieEdition;

    people = [ ];
    newpeople = [];
    constructor(private peopleS : characterService) { }

 
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.newpeople = [ ];
          for(var i =0 ; i< this.movieEdition.length; i++){
            
            this.getPersonName(this.movieEdition[i])

         }
         this.people = this.newpeople;
    }
     getPersonName(personUrl){

        this.peopleS.getCharacter(personUrl).subscribe(data=>{
            
             this.newpeople.push( data['name']);
        });

     }


}
