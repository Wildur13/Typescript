import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  isActive = true;
  background: any;

  author = {
    title: 'Pr. Dr.',
    name: 'Williams',
    surname: 'Eric',
    age: 24,
    University: 'San Francisco',
    enterDate: new Date(2022, 1, 1),
    email: 'eric@gmail.com',
  }
  
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors(); }

  ngOnInit(): void {
  }

  backGroundChange() {
    if (this.isActive) {
      this.background = "yellow";
      this.isActive = !this.isActive;
    }
    this.background = "green";
    this.isActive = !this.isActive;
  }

}
