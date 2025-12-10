import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-mod6demo1',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './mod6demo1.html',
  styleUrl: './mod6demo1.css',
  standalone: true
})
export class Mod6demo1 {

  form: FormGroup
  firstname? : string

  constructor() {
    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/)]),
        birthdate: new FormControl(null, [Validators.required, this.dateValidator]),
        newsLetter: new FormControl(true),
        job: new FormControl('admin'),
        note: new FormControl(5, [Validators.min(1), Validators.max(10)])

      })

  }

  dateValidator(control: AbstractControl) {
    if (control && control.value) {
      if (new Date() < new Date(control.value)) {
        return {dateGreaterThan: true}
      }
    }
    return null
  }

  onSubmit(){
    if(this.form.valid){
      //si c'est ok j'envoie le form vers une api, un service
      console.log(this.form.value)
    }else{
      console.log("Pas bon !")
    }
  }


  check(event : Event) {
    console.log(event)
    if(this.firstname?.trim().length == 0 ){
      console.log("Met un truc dedans !")
    }
  }

  onSubmit2() {

  }
}
