import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://5d30890245e2b00014d93571.mockapi.io/categories';
  constructor(private http: HttpClient) { }

  public getListProduct(cateId) {
    return this.http.get<any[]>(`${this.apiUrl}/${cateId}/products`);
  }

  public getProductById(cateId, productId) {
    return this.http.get<any>(`${this.apiUrl}/${cateId}/products/${productId}`);
  }

  public addProduct(data) {
    console.log(data);
    return this.http.post<any>(`${this.apiUrl}/${data.cate_id}/products`, data);
  }

  public editProduct(cateId, productId, data) {
    return this.http.put<any>(`${this.apiUrl}/${cateId}/products/${productId}`, data);
  }
  public removeProduct(cateId, productId) {
    return this.http.delete<any>(`${this.apiUrl}/${cateId}/products/${productId}`);
  }


}
