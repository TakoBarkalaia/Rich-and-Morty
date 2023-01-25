import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared_services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  allCharactersList:any[] = []
  

  constructor(private characterServices:CharactersService) { }

  ngOnInit(): void {
    this.characterServices.getAllCharacters().subscribe((responce:any) =>{
    this.allCharactersList = responce.results
  }
    )
    console.log(this.allCharactersList)
  }

  getGenderFemale(){
    this.characterServices.getCharacterByGender('female').subscribe((responce:any) => {
      this.allCharactersList = responce.results
      
    })
  }
  getGenderMale(){
    this.characterServices.getCharacterByGender('male').subscribe((responce:any) => {
    this.allCharactersList = responce.results
})
}

getGenderGenderless() {
  this.characterServices.getCharacterByGender('genderless').subscribe((response:any) => {
    this.allCharactersList = response.results
  })
}

getGenderUnknown() {
  this.characterServices.getCharacterByGender('unknown').subscribe((responce:any) => {
    this.allCharactersList = responce.results
  })
}
getAlterEgos(characterName:any) {
    this.characterServices.getCharacterByName(characterName).subscribe((responce:any) =>{
      this.allCharactersList = responce.results
    })
}

}
