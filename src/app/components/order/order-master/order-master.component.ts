import { AfterViewInit, Component, ElementRef, OnChanges, SimpleChanges, viewChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../../models/icategory';
import { ProductListComponent } from "../product-list/product-list.component";
import { ViewCard } from '../../../models/view-card';
import { StaticProductsService } from '../../../services/static-products.service';

@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})
export class OrderMasterComponent implements AfterViewInit  {
  selectedCatList:number =0; 
  catList : Icategory[];
  recievedTotalPrice:number =0;
  recievedObjTotalPrice:ViewCard[] =[]
  @ViewChild('ClientNameInp') ClientNameInp !: ElementRef;
  @ViewChild(ProductListComponent) prdListCompObj ! :ProductListComponent

  constructor(private staticProductsServices : StaticProductsService){
    this.catList =[{id:1 , name:"laptops"},
      {id:2 , name:"taplets"},
      {id:3 ,name:"mobiles"}
    ];
  }
  
  ngAfterViewInit(): void {
    this.ClientNameInp.nativeElement.value="type Your Name Here";
    this.ClientNameInp.nativeElement.style.border="2px blue solid";
    // console.log(this.prdListCompObj.prdlist)
  }
  onTotalPriceChanged(toltalPrice:number){
    this.recievedTotalPrice = toltalPrice;
  }
  onBoughtOrder(totalPriceDetails :ViewCard){
    this.recievedObjTotalPrice.push(totalPriceDetails);

  }

  deleteOrder(indexOfRow:number , prdPrice:number){
    this.recievedTotalPrice -= prdPrice;
    
    this.recievedObjTotalPrice.splice(indexOfRow,1);
    alert("the item was deleted")
    
  }
  deleteOneOrder(indexOfRow:number , prdPrice:number,prdCount:number){
    let priceOfAll:number = prdPrice*prdCount
    if(prdCount==1)
    {
      this.recievedTotalPrice -=(prdPrice*this.recievedObjTotalPrice[indexOfRow].cardCount);
      this.recievedObjTotalPrice.splice(indexOfRow,1);
      // this.recievedObjTotalPrice[indexOfRow].cardCount--;
      
      alert("the item was deleted");
    }
    else{
      this.recievedObjTotalPrice[indexOfRow].cardCount--;
      this.recievedTotalPrice-=prdPrice;
    }
  }

  //دي لما اعمل confirm  هيروح ينقص الكمية لوحده 
  confirmOrder(){
    for(let order of this.recievedObjTotalPrice){
      // let product = this.prdListCompObj.prdlist.find(prd => prd.id === order.cardId) 
      let product = this.staticProductsServices.prdList.find(prd => prd.id === order.cardId)
      if(product)
      {product.quantity -= order.cardCount} 
    }
  }

  

}
