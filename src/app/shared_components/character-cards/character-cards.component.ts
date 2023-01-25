import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-cards',
  templateUrl: './character-cards.component.html',
  styleUrls: ['./character-cards.component.css']
})
export class CharacterCardsComponent implements OnInit {
  @Input() characterItem:any; 
  

  constructor() { }

  ngOnInit(): void {
    
    
   
  }
  
  

}
