import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-inner-cards',
  templateUrl: './character-inner-cards.component.html',
  styleUrls: ['./character-inner-cards.component.css']
})
export class CharacterInnerCardsComponent implements OnInit {
@Input() characterItemInner:any
  constructor() { }

  ngOnInit(): void {
  }

}
