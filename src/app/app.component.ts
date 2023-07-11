import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedPath = 'recipe';
  title = 'food-recipes-app';

  onNavigate(path:string) {
    this.loadedPath = path;
  }
}
