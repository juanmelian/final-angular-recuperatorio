import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any = [];

  constructor(private charactersService: CharactersService){}

  ngOnInit(){
    this.charactersService.getCharacters().then(data=>{
      this.characters = data;
      console.log(this.characters);
    }); 
  }

  


}
