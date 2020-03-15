// member-get.component.ts

import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  members: Product[];
  constructor(private ms: ProductService) { }

  deleteProduct(id, index) {
    this.ms.deleteProduct(id).subscribe(res => {
      this.members.splice(index, 1);
    });
}
  ngOnInit() {
    this.ms
      .getProducts()
      .subscribe((data: Product[]) => {
        this.members = data;
      });
  }

}