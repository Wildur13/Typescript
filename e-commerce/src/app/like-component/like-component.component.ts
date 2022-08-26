import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'likeComponent',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.css']
})
export class LikeComponentComponent implements OnInit {
  @Input('likesCount')
  likesCount!: number;
  
  @Input('isActive') isActive!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  addOrReduceLikes(){
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive
  }

  @Output() changed = new EventEmitter();



}
