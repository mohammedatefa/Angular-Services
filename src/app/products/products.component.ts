import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  productslist:{title:string,description:string,price:number}[]=[];
  constructor(private _productslist:ProductsService) {
  }
  ngOnInit(): void {
    this.productslist=this._productslist.products;
  }

}
