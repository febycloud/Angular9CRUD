import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000/product';


  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductBio, Price) {
    const obj = {
      ProductName,
      ProductBio,
      Price
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  getProducts() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    updateProduct(ProductName, ProductBio, Price, id) {
      const obj = {
        ProductName,
        ProductBio,
        Price
      };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deleteProduct(id) {
      return this
        .http
        .get(`${this.uri}/delete/${id}`);
    }

}
