import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule, routes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { RouterOutlet } from '@angular/router';
import { RouterLink,  } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,RouterOutlet,RouterLink,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  
  // imports: [
  //   CommonModule,
  //   AppRoutingModule
  // ]
})
export class AppModule { }
