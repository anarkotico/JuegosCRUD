import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game: Game;
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
     this.game._id='';
     this.game.titulo='';
     this.game.fabricante='';
     this.game.anyo=null;
     this.game.rating=null;
     this.game.descripcion='';
   
    console.log(this.route.snapshot.params['_id']);
    this.getGameDetails(this.route.snapshot.params['_id']);
  }

  getGameDetails(id) {
    this.api.getGame(id)
      .subscribe(data => {
        this.game = data;
        console.log(this.game);
        this.isLoadingResults = false;
      });
  }

  deleteGame(id) {
    this.isLoadingResults = true;
    this.api.deleteGame(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/games']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
