import { Component, EventEmitter, Input, input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../../models/icategory';
import { FormsModule } from '@angular/forms';
import {LightboxDirective} from '../../../directive/lightbox.directive'
import { USDToEGPPipe } from '../../../pipes/usdto-egp.pipe';
import { ViewCard } from '../../../models/view-card';
import { StaticProductsService } from '../../../services/static-products.service';
import { Router } from '@angular/router';
import { RouterLink  } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule ,FormsModule,LightboxDirective ,USDToEGPPipe,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit,OnChanges {
prdlist :Iproduct [] =[];
// catList :Icategory[];
// prdListOfCat : Iproduct[] =[];
@Input()orderTotalPrice :number =0;
selectedCatList : number=0;
@Input()sentCatList : number = 0;
@Output()totalPriceChanged :EventEmitter<number>;
@Output()objOfTotalOrder : EventEmitter<ViewCard>;
sentObjOrderPrice :ViewCard | undefined 
  constructor(private staticProductsServices : StaticProductsService ,private router: Router){
    

    // this.prdlist = [
    //   {id:1 , name:'lenovo' , categoryName:"taplet",price :1000,quantity:1,categoryId:2,imgUrl:"https://fakeimg.pl/250x100/"},
    //   {id:2 , name:'apple' ,categoryName:"laptop",price :4400,quantity:4,categoryId:1,imgUrl:"https://fakeimg.pl/250x100/"},
    //   {id:3 , name:'samsung' ,categoryName:"mobile",price :1515.1,quantity:7,categoryId:3,imgUrl:"https://fakeimg.pl/250x100/"},
    //   {id:4 , name:'huawei' ,categoryName:"mobile",price :2571,quantity:9,categoryId:3,imgUrl:"https://fakeimg.pl/250x100/"},
    //   {id:5 , name:'acer' ,categoryName:"laptop",price :3625,quantity:4,categoryId:1,imgUrl:"https://fakeimg.pl/250x100/"},
    //   {id:6 , name:'hp' ,categoryName:"laptop",price :1408,quantity:5,categoryId:1,imgUrl:"https://fakeimg.pl/250x100/"},
    //   {id:7 , name:'samsung' ,categoryName:"taplet",price :4712,quantity:6,categoryId:2,imgUrl:"https://fakeimg.pl/250x100/"}
    // ] ,
    // this.catList =[{id:1 , name:"laptops"},
    //   {id:2 , name:"taplets"},
    //   {id:3 ,name:"mobiles"}
    // ];
    // this.prdListOfCat = this.prdlist;
    this.totalPriceChanged= new EventEmitter<number>;
    this.objOfTotalOrder = new EventEmitter<ViewCard> 
    
  }
  ngOnInit(): void {
    this.prdlist =this.staticProductsServices.prdList
  }
  ngOnChanges(): void {
    this.prdlist =this.staticProductsServices.filterProductsByCatId(this.sentCatList);
  }
  buy(prdName:string,catName:string,prdPrice:number,count:any,prdId:number){
    let itemcount = parseInt(count);
    if(count <=0)
     { alert("Empty field")}
    else{
    this.orderTotalPrice += (prdPrice * itemcount);
    this.totalPriceChanged.emit(this.orderTotalPrice);
    this.sentObjOrderPrice={cardProductName:prdName,cardCategoryName:catName,cardCount:count,cardPrice:prdPrice , cardId:prdId};
    this.objOfTotalOrder.emit(this.sentObjOrderPrice)
    }
  }
  
  // filterProductsByCatId(){
  //   if(this.sentCatList == 0)
  //     this.prdListOfCat=this.prdlist;
  //   else
  //     this.prdListOfCat=this.prdlist.filter(prd=>prd.categoryId==this.sentCatList)
  // }
  openProdDetails(pId:number){
    this.router.navigate(["/product",pId])// array
    // this.router.navigateByUrl("/products/" + pId) // string
  }

}
