import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipesService } from '../shared/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }

  
}
