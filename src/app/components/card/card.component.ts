import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  pokemon?:PokemonData

  constructor(
    private service:PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string) {
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
        },
        error: (err) => console.error(`not found ${err}`),
      }
    )
  }
}
