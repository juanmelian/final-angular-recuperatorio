import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: any;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {

    this.route.params.subscribe(params=>{

      const _id = Number(params['id']);
      
      this.charactersService.getCharacterById(_id).then(data=>{
        this.character = data;
        console.log(this.character);
      })

    });
  }

}
