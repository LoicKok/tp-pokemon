import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../models/apiResponse.model';
import { Pokemon } from '../models/pokemon.model';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  offset: number = 0;
  limit: number = 20;

  constructor(private PokemonService: PokemonServiceService) { }

  ngOnInit(): void {
   this.PokemonService.getPokemons(this.offset,this.limit).subscribe(pokemonList => this.pokemons = pokemonList.data);
  }

  onScroll(): void {
    const offset: number = this.pokemons.length;
    const limit: number = 20;
    this.PokemonService.getPokemons(offset, limit).subscribe(
      (result: ApiResponse<Pokemon>) => this.pokemons.push(...result.data)
    );
  }
    

}
