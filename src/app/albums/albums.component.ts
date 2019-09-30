import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
albums=[]
photos=[]
  constructor(private http:HttpClient) {
   // this.getAlbums()
    this.getPhotos() }


  ngOnInit() {
  }

  // getAlbums(){
  //   return this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe(data => {
       
  //       this.albums.push(data)
  //       console.log(this.albums)
  //       for(var i=0;i<this.albums.length;i++) {
  
  //       }
  //       for (var i=0;i<this.albums.length;i++){

  //       }
  //     })
  // }
  getPhotos(){
    return this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(data => {
       
        this.photos.push(data)
        console.log(this.photos)
        for(var i=0;i<this.photos.length;i++) {
  
        }
        for (var i=0;i<this.photos.length;i++){

        }
      })
  }
  }
  


