import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-game-gal',
  templateUrl: './game-gal.component.html',
  styleUrls: ['./game-gal.component.scss']
})
export class GameGalComponent implements OnInit {
//var.instancia:
  isLoadingResults = true;
  games: Game[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getGames()
      .subscribe(res => {
        this.games = res;
        console.log(this.games);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
