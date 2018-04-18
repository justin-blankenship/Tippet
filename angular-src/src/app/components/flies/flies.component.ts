import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flies',
  templateUrl: './flies.component.html',
  styleUrls: ['./flies.component.css']
})
export class FliesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-flies',
//   templateUrl: './flies.component.html',
//   styleUrls: ['./flies.component.css']
// })
// export class FliesComponent implements OnInit {
// 	flies: any;

//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//   	this.http.get('/flies').subscribe(data => {
//   		this.flies = data;
//   	});
//   }
// }

