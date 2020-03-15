import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

  createForm(){

    this.angForm=this.fb.group({
      ProductName:['',Validators.required],
      ProductBio:['',Validators.required],
      Price:['',Validators.required]
    });
  }

addProduct(ProductName,ProductBio,Price){
  this.ms.addProduct(ProductName,ProductBio,Price);
  this.router.navigate(['products']);
}

  ngOnInit():void {
  }

}
