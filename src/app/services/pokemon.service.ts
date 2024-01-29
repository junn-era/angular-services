import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';
import { environment } from '../app.component';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = ""
  private pokeData:PokemonData | any
  constructor(private httpClient: HttpClient){
    this.baseURL = environment.pokeApi
  }

  getPokemon(pokemonName:string):Observable<PokemonData>{
    this.pokeData = this.httpClient.get<PokemonData>(`${this.baseURL}${pokemonName}`)
    return this.pokeData
  }
}
