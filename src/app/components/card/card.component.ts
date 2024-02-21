import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonsData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
pokemon:PokemonData;
//name:string = "charizard";
//attibutesTypes:string[] = ['FIRE', 'ROCK'];

  constructor(
    private service: PokemonService
  ) {
    this.pokemon = {
      id:0,
      name: '',
      sprites:{
        front_default: ''
      },
      types:[]
    }
   }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName: string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (result) => {

          this.pokemon = {
            id: result.id,
            name: result.name,
            sprites: result.sprites,
            types: result.types
          }
          //console.log(res)
          //console.log(res.id),
          //console.log(res.name),
          //console.log(res.sprites.front_default),
          //console.log(res.types)
          console.log(result.types);
          console.log(this.pokemon);
        },
        error: (err) => console.log('not found')
      }
    )
    console.log(searchName)
  }

}
