import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.scss']
})
export class GameAddComponent implements OnInit {

  gameForm: FormGroup;
  titulo:string='';
  descripcion:string='';
  anyo:number=null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.gameForm = this.formBuilder.group({
      'titulo' : [null, Validators.required],
      'anyo' : [null, Validators.required],
      'fabricante' : [null, Validators.required],
      'genero' : [null, Validators.required],
      'descripcion' : [null, Validators.required],
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addGame(form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/game-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
