import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
todos=[]
  constructor(private http:HttpClient) {this.getTodos() }

  ngOnInit() {
  }
  task(userId){
    console.log(userId)
    return this.http.get("https://jsonplaceholder.typicode.com/todos/"+userId).subscribe(data => {
     
      this.todos.push(data)
      console.log(this.todos) 
      // for(var i=0;i<this.todos.length;i++) {

      // }
  
    })


  }
getTodos(){
  return this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data => {
     
      this.todos.push(data)
      console.log(this.todos)
      for(var i=0;i<this.todos.length;i++) {

      }
  
    })
}
}
