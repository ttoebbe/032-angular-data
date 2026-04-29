import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterService } from './counter_service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  counterServiceRechner = inject(CounterService);

}