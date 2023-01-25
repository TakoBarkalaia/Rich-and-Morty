import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private allCharactersApi:string = 'https://rickandmortyapi.com/api/character';
  private getCharactersByNameApi:string = 'https://rickandmortyapi.com/api/character/?'
  private getCharacterByGenderApi:string = 'https://rickandmortyapi.com/api/character/?gender='

  constructor(private httpClient:HttpClient) { }

  getAllCharacters():Observable<any>{
    return this.httpClient.get(this.allCharactersApi);
  }

  getCharacterByName(characterName:any):any {
    var apiUr:string = `${this.getCharactersByNameApi}name=${characterName}`;
    return this.httpClient.get(apiUr);
  }

  getCharacterByGender(characterGender:string):any {
    var apiUrl:string = `${this.getCharacterByGenderApi}${characterGender}`;
    return this.httpClient.get(apiUrl);
  }
  
}
