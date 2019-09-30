
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login = this.fb.group({
    firstname:[''],
    lastname:[''],
    email: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder, private http: HttpClient,public router:Router) { }

  ngOnInit() {
  }
  loginform(value) {
    let email= this.login.get("email").value
    let password= this.login.get("password").value
    let body = {
      "firstname":name,
      "lastname":name,
      "email": name,
      "password": password
    }
    console.log(body)
    if (email&&password){
     console.log(value)
      this.router.navigate(["/signup"])
    }
  }
  
  
}
