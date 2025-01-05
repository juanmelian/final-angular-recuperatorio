import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CharactersService{

    async getCharacters(){

        const response = await fetch('http://rickandmortyapi.com/api/character',{referrerPolicy: "unsafe-url"});

        const data = await response.json();

        return data.results;

    }
}