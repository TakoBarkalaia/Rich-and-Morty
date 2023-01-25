import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters/characters.component';
import { CharacterInnerComponent } from './characters/character-inner/character-inner.component';
import { CharacterCardsComponent } from './shared_components/character-cards/character-cards.component';
import { CharacterInnerCardsComponent } from './shared_components/character-inner-cards/character-inner-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterInnerComponent,
    CharacterCardsComponent,
    CharacterInnerCardsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
