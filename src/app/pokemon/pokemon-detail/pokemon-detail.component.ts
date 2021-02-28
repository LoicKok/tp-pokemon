import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon?: Pokemon;
  constructor(private route: ActivatedRoute,
    private PokemonService: PokemonServiceService,
    private location: Location) { }

  ngOnInit(): void {
    //const id = +this.route.snapshot.paramMap!.get('id');
    //this.PokemonService.getPokemonById(id).subscribe(myResult => this.pokemon = myResult);
  }

  Back(): void {
    this.location.back();
}

  

}
