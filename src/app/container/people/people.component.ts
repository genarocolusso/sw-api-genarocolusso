import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { characterService } from '../../services/character.service';

@Component({
    selector: 'people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss']
})
export class peopleComponent implements OnInit {

    @Input() movieEdition;

    people = [];
    
    constructor(private peopleS : characterService) { }

    ngOnInit(): void {

         
            
     }

 
     getPersonName(personUrl){

        this.peopleS.getCharacter(personUrl).subscribe(data=>{
            console.log(data);
            return data['name'];
        });

     }


}
