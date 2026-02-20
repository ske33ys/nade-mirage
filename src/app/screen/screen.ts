import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screen',
  imports: [],
  templateUrl: './screen.html',
  styleUrl: './screen.css',
})
export class Screen {
  @Input() text: string = '';
  @Input() source: string = '';
}
