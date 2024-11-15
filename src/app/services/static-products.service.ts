import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  prdList : Iproduct[] =[];
  constructor() {
    this.prdList = [
      {id:1 , name:'lenovo' , categoryName:"taplet",price :1000,quantity:1,categoryId:2,imgUrl:"https://fakeimg.pl/250x100/"},
      {id:2 , name:'apple' ,categoryName:"laptop",price :4400,quantity:4,categoryId:1,imgUrl:"https://fakeimg.pl/250x100/"},
      {id:3 , name:'samsung' ,categoryName:"mobile",price :1515.1,quantity:7,categoryId:3,imgUrl:"https://fakeimg.pl/250x100/"},
      {id:4 , name:'huawei' ,categoryName:"mobile",price :2571,quantity:9,categoryId:3,imgUrl:"https://fakeimg.pl/250x100/"},
      {id:5 , name:'acer' ,categoryName:"laptop",price :3625,quantity:4,categoryId:1,imgUrl:"https://fakeimg.pl/250x100/"},
      {id:6 , name:'hp' ,categoryName:"laptop",price :1408,quantity:5,categoryId:1,imgUrl:"https://fakeimg.pl/250x100/"},
      {id:7 , name:'samsung' ,categoryName:"taplet",price :4712,quantity:6,categoryId:2,imgUrl:"https://fakeimg.pl/250x100/"}
    ]
   }

   filterProductsByCatId(cId:number):Iproduct[]{
    if (cId==0)
    {return this.prdList}
    else
      {return this.prdList.filter(prd=>prd.categoryId==cId);}
   }
   filterProductsById(pId:number):Iproduct | null{
    let FoundedPrd= this.prdList.find(prd=>prd.id==pId);
    // if(FoundedPrd)
    // {return FoundedPrd}
    // else 
    // {return null}
    return FoundedPrd? FoundedPrd : null
   }
}
