import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpServices } from './service/http.service';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { PostComponent } from './post/post.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionFourComponent } from './question-four/question-four.component';
import { QuestionFiveComponent } from './question-five/question-five.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PostComponent,
    QuestionThreeComponent,
    QuestionFourComponent,
    QuestionFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule
  ],
  providers: [HttpServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
