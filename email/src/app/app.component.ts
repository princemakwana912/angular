import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'email';
  form: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required,Validators.email,Validators.minLength(3),Validators.maxLength(80)]],
      },
    )
  }


  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);

  }

  get fm(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

}
