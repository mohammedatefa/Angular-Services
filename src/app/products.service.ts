import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products:{title:string,description:string,price:number}[]=
  [
    {title:"product-1",description:"this is the product 1",price:5000},
    {title:"product-2",description:"this is the product 2",price:7000},
    {title:"product-3",description:"this is the product 3",price:4000},
    {title:"product-4",description:"this is the product 4",price:3000},
    {title:"product-5",description:"this is the product 5",price:8000},
  ];
}
