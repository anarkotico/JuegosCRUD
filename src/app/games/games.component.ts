import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  displayedColumns: string[] = ['_id','titulo', 'anyo','fabricante','descripcion'];
  data: Game[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }
  add(){
    
  }
  ngOnInit() {
    this.api.getGames()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
