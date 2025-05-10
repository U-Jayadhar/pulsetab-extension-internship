import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
})
export class AppComponent {
  clicked = false;
  showMessage() {
    this.clicked = true;
  }
}
