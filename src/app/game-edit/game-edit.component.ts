import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit {

  gameForm: FormGroup;
  _id:string='';
  titulo:string='';
  descripcion:string='';
  portada:string='';
  genero:string='';
  anyo:number=null;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getGame(this.route.snapshot.params['_id']);
    this.gameForm = this.formBuilder.group({
      'titulo' : [null, Validators.required],
      'descripcion' : [null, Validators.required],
      'fabricante' : [null, Validators.required],
      'portada' : [null, Validators.required],
      'descripcion' : [null, Validators.required],
      'anyo' : [null, Validators.required]
    });
  }

  getGame(id) {
    this.api.getGame(id).subscribe(data => {
      this._id = data._id;
      this.gameForm.setValue({
        titulo: data.titulo,
        descripcion: data.descripcion,
        anyo: data.anyo
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateGame(this._id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/game-details'], id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  gameDetails() {
    this.router.navigate(['game-details'], this._id]);
  }

}
