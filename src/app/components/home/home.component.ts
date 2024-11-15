import { Component } from '@angular/core';
import { StoreData } from '../../view models/store-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isImgShown = true;
  storeInfo : StoreData;
  constructor(){
    this.storeInfo= new StoreData("ahmed" , "https://picsum.photos/400/300" , ["cairo" , "alex" , "qena" , "giza"])
  }

  toggleImg():void{
    let img2 = document.getElementById("img2")
    this.isImgShown = ! this.isImgShown
    if(img2){
      if(this.isImgShown){
        img2.style.visibility="visible"
      }
      else{
        img2.style.visibility="hidden"
      }
    }
  }

}
