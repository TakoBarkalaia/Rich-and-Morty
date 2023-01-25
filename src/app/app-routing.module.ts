import { CharacterInnerComponent } from './characters/character-inner/character-inner.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters/characters.component';

const routes: Routes = [
  {path: '', component: CharactersComponent},
  {path: 'character/inner/:characterName', component: CharacterInnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
