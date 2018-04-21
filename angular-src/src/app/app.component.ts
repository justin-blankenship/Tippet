import { Component } from '@angular/core';
import { FlyService } from './services/fly.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlyService]
})

export class AppComponent {
  title = 'app';
}
