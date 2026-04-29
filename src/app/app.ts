import { Component, signal, inject } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CounterService } from './counter_service';
import { CompA } from './comp-a/comp-a';
import { CompB } from './comp-b/comp-b';

@Component({
  selector: 'app-root',
  imports: [CompA, CompB],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 

}