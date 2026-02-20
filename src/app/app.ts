import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Mid } from './mid/mid';
import { A } from './a/a';
import { B } from './b/b';

@Component({
  selector: 'app-root',
  imports: [Mid, A, B],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cs-map');
}
