import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.scss']
})
export class ReactiveFromComponent {
  name = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.profileForm.value)
  }
}
