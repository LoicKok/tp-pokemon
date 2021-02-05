import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from './models/apiResponse.model';

import { Pokemon } from './models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

apiUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons';

  constructor(private httpClient: HttpClient) { }

  getPokemons(offset?: number, limit?: number) : Observable<ApiResponse<Pokemon>>{
    let params= new HttpParams();
    if(offset) {
      params = params.set('offset', `${offset}`)
    }
    if(limit) {
      params = params.set('limit', `${limit}`)
    }
    return this.httpClient.get<ApiResponse<Pokemon>>(this.apiUrl, {params});
  }
  handleError<T>(arg0: string, arg1: undefined[]): any {
    throw new Error('Method not implemented.');
  }

  getPokemonById(id: number):Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.apiUrl+'/' + id);
  }


  
}
