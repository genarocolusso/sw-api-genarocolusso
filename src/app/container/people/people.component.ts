import { Component, OnInit, Input, EventEmitter, OnChanges, Output } from '@angular/core';
import { characterService } from '../../services/character.service';
import { planetService } from '../../services/planets.service';

export class person {

    name: string;
    hair_color: string;
    skin_color: string;
    height: string;
    gender: string;
    birth_year: string;
    homeworld: string
}

@Component({
    selector: 'people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss']
})
export class peopleComponent implements OnChanges {

    @Input() moviePeople;
    @Input() movieEdition;
    @Output() responsePerson = new EventEmitter();

    newperson: person;
    selectedperson: person;
    people = [];
    newpeople;
    looplength;
    constructor(private peopleS: characterService, private planetS: planetService) { }


    ngOnChanges(): void {

        this.newpeople = [];
        this.looplength = (this.moviePeople.length > 20 ? this.moviePeople.length / 2 : this.moviePeople.length);
        // I felt like  all characters are way too much to some movies... 
        for (var i = 0; i < this.looplength; i++) {

            this.getPersonName(this.moviePeople[i])

        }
        // if i wanted them all.
        // let MovieP = this.moviePeople;
        // MovieP.forEach(element => {

        //     this.getPersonName(element)
        // }); 

        this.people = this.newpeople;
    }
    getPersonName(personUrl) {

        this.peopleS.getCharacter(personUrl)
            .subscribe(data => {
                this.newperson =
                    {
                        name: data['name'],
                        hair_color: data['hair_color'],
                        skin_color: data['skin_color'],
                        height: data['height'],
                        gender: data['gender'],
                        birth_year: data['birth_year'],
                        homeworld: data['homeworld']
                    };  
                    this.newpeople.push(this.newperson);
            });
           

    }

    selectPerson(person){
        this.selectedperson = person;
        this.responsePerson.emit( this.selectedperson );
    }



}
