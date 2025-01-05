import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor( private fb: FormBuilder ){
    this.contactForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }
}
