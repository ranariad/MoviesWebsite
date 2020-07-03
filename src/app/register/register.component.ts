import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({

    'firstname' :new FormControl( null , [Validators.required,Validators.minLength(3),Validators.maxLength(8)] ),
    'lastname' :new FormControl(null , [Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    'age' :new FormControl(null , [Validators.required,Validators.min(16),Validators.maxLength(25)]),
    'Email' :new FormControl(null , [Validators.required , Validators.email]),
    'password' :new FormControl()


  }) 

  constructor() { }

  ngOnInit(): void {
  }

  getFormData(formData)
  {

    if(formData.valid == true)
    {

      console.log(formData.value)

    }
    

     
  }

}
