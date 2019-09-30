import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-classbook',
  templateUrl: './classbook.component.html',
  styleUrls: ['./classbook.component.css']
})
export class ClassbookComponent implements OnInit {
  name: any;
  tabledata
  constructor(private http: HttpClient, private titleService: Title, private route: ActivatedRoute, private router: Router) {
    this.titleService.setTitle("classbook")
    // this.name = this.route.snapshot.params.name;
    // console.log(this.name)
    this.showdata()
  }

  ngOnInit() { }

  showdata() {
    // console.log('table data')
    let headers = { 'id': JSON.parse(localStorage.getItem('logindata')).success._id }
    console.log(headers)
    this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/' + headers.id).subscribe(data => {
      // console.log(data)
      this.tabledata = data['success'].movies
      // console.log(this.tabledata)
    })
  }

  addMovie() {
    this.router.navigate(['/classbook'])
  }
  logout() {
    alert('Are you sure want to logout');
    localStorage.removeItem('logindata')
    this.router.navigate(["/"]);
    window.location.replace('/')
  }

  myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}