import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flies',
  templateUrl: './flies.component.html',
  styleUrls: ['./flies.component.css']
})
export class FliesComponent implements OnInit {
	flies: any;

  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('/flies').subscribe(data => {
  		this.flies = data;
  	});
  }
}
