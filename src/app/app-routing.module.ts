import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
// import { GameTableComponent } from './game/game-table/game-table.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GameAddComponent } from './game-add/game-add.component';

const routes: Routes = [
  {
    path: 'games',
    component: GamesComponent,
    data: { title: 'List of Games' }
  }  ,
  // {
  //   path: 'gametable',
  //   component: GameTableComponent,
  //   data: { title: 'List of Games' }
  // }  ,
  {
    path: 'game-details/:id',
    component: GameDetailComponent,
    data: { title: 'Game Details' }
  },
  {
    path: 'game-add',
    component: GameAddComponent,
    // component: GameAddComponent,
    data: { title: 'Add Game' }
  },
{
    path: 'game-form',
    component: GameFormComponent,
    // component: GameAddComponent,
    data: { title: 'Add Game' }
  },
  // {
  //   path: 'game-edit/:id',
  //   component: GameEditComponent,
  //   data: { title: 'Edit Game' }
  // },
  { path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
