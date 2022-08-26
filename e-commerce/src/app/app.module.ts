import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { LikeComponentComponent } from './like-component/like-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    LikeComponentComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [ AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
