import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/order/product-list/product-list.component';
import { OrderMasterComponent } from './components/order/order-master/order-master.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { UserLoginComponent } from './components/userLogin/userLogin.component';
import { MainLayoutComponent } from './components/mainLayout/mainLayout.component';
import { ProductDetailsComponent } from './components/order/productDetails/productDetails.component';

export const routes: Routes = [ //first-match wins strategy
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'Home',component : HomeComponent},
    {path:'Product',component : ProductListComponent},
    {path:'Product/:pId',component :ProductDetailsComponent},
    {path:'Order',component : OrderMasterComponent}]},
  
  {path:'login',component:UserLoginComponent},
  {path:'**', component:NotFoundComponent} //wild card path
];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
