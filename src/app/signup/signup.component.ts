import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup = this.fb.group({
    Email: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder, private http: HttpClient,public router:Router) { }

  ngOnInit() {
  }

  signupform(value) {
    let Email= this.signup.get("Email").value
    let password= this.signup.get("password").value
    let body = {
      "Email": Email,
      "password": password
    }
    console.log(body)
    if (Email&&password){
    return this.http.post("https://reqres.in/api/users", body).subscribe(data => {
      console.log(data)
      this.router.navigate(["/dashboard"])
    })
  }
  else{
    console.log("password missmatch")
  }
  }
}



