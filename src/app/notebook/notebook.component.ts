import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {
  public firstname: any
  public lastname: any
  public username: any
  public mail: any
  constructor(private router:Router) { }

  ngOnInit() {
  }
  submit() {
    var data = {
      'fname': this.firstname,
      'lname': this.lastname,
      'uname': this.username,
      'Mail': this.mail
    }
    console.log(data)
    localStorage.setItem("values", JSON.stringify(data));
    this.router.navigate(['class'])
  }
}
