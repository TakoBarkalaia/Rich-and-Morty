import { CharactersService } from 'src/app/shared_services/characters.service';
import { Component, Input, OnInit } from '@angular/core';
import { CharacterCardsComponent } from 'src/app/shared_components/character-cards/character-cards.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-inner',
  templateUrl: './character-inner.component.html',
  styleUrls: ['./character-inner.component.css']
})
export class CharacterInnerComponent implements OnInit {
   allCharactersAlterEgos:any[] = [];
   
  
   
constructor( private charactersService:CharactersService, 
  private activeRoute:ActivatedRoute) { }
          
  
 ngOnInit(): void {
   this.activeRoute.params.subscribe((params) =>{
    let characterName = params['characterName']
    
    let name = characterName.split(' ')
    console.log(name);
    this.charactersService.getCharacterByName(name[0]).subscribe((responce:any)=>{
this.allCharactersAlterEgos = responce.results
console.log(this.allCharactersAlterEgos
);
 

    })
   })
      
    
    
    
  }

}
