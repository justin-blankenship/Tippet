import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatternService } from '../../services/pattern.service';

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

@Component({
  selector: 'app-flies',
  templateUrl: './flies.component.html',
  styleUrls: ['./flies.component.css']
})
export class FliesComponent {
  
  flies: Array<any>;

  constructor(private _patternService: PatternService) {
    this._patternService.getFlies()
      .subscribe(res => this.flies = res);
  } 
}