import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlyService } from '../../services/fly.service';

@Component({
  selector: 'app-flies',
  templateUrl: './flies.component.html',
  styleUrls: ['./flies.component.css']
})
export class FliesComponent implements OnInit {
  flies = [];

  constructor(private _flyService: FlyService) { }
  ngOnInit() {
    this._flyService.getFlies()
      .subscribe(resFlyData => this.flies = resFlyData);
  }
}