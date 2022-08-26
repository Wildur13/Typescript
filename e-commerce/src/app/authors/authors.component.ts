import { Component, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  styles: [
      `
        .glyphicon{
          color: red;
        }
      `
  ],
  inputs: [], // not recommanded here,
  encapsulation: ViewEncapsulation.Emulated
})
export class AuthorsComponent implements OnInit {
  authors;
  isActive = true;
  background: any;
  color = "yellow";
  isClicked!: boolean;
  glyp = "glyphicon glyphicon-star-empty";
  txt = "Enter a text";

  @Output() change = new EventEmitter();

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
    else {
      this.background = "green";
      this.isActive = !this.isActive;
    }
  }
  changeStar(){
    this.isClicked = !this.isClicked;
    this.change.emit();
  }

  post = {
    title: "Title",
    isClicked: true,
  }

}
