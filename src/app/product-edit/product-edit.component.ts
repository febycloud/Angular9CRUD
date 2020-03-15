import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm: FormGroup;
  member: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ms: ProductService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductBio: ['', Validators.required],
      Price: ['', Validators.required]
    });
  }
  
  updateProduct(ProductName, ProductBio, Price) {
    this.route.params.subscribe(params => {
      this.ms.updateProduct(ProductName, ProductBio, Price, params.id);
      this.router.navigate(['products']);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ms.editProduct(params[`id`]).subscribe(res => {
        this.member = res;
      });
    });
  }
}