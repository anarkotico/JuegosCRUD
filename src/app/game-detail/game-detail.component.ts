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

  game: Game=
    { _id: '', titulo:'', descripcion:'',
                portada: '', updated_at:null, anyo:null,
                fabricante:'', genero:'', rating:null
              };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getGameDetails('_id');
  }
//   onRowClicked(row) {
//     console.log('Row clicked: '+ row._id);
// }
  getGameDetails(id) {
    console.log(id);
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
