import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  onFavouriteChanged() { 
    console.log('Favourite changed')
  }

  tweets ={
    body: '',
    isLiked: false,
    likeCount: 5
  }

  
}
