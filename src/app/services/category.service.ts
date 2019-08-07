import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'http://5d30890245e2b00014d93571.mockapi.io/categories';
  constructor( private http: HttpClient) {}

  public getListCategory() {
    return this.http.get<any[]>(this.apiUrl);
  }

  public getCategoryById(cateId) {
    return this.http.get<any>(`${this.apiUrl}/${cateId}`);
  }

  public addCategory(data) {
    return this.http.post<any>(this.apiUrl, data);
  }

  public editCategory(cateId, data) {
    return this.http.put<any>(`${this.apiUrl}/${cateId}`, data);
  }
  public removeCategory(cateId) {
    return this.http.delete<any>(`${this.apiUrl}/${cateId}`);
  }
}
