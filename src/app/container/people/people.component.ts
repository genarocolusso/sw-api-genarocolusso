import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { characterService } from '../../services/character.service';

@Component({
    selector: 'people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss']
})
export class peopleComponent implements OnInit {

    @Input() recebePeople;

    
    constructor(private peopleS : characterService) { }

    ngOnInit(): void {

        console.log('recebi uma galera ', this.recebePeople);

     }

     getPersonName(personUrl){

        this.peopleS.getCharacter(personUrl).subscribe(data=>{
            console.log(data);
            return data['name'];
        });

     }


}
