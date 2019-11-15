import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl:string= 'https://book-hubs.herokuapp.com/api/v1'

  constructor(private http:HttpClient) { }

  getCategories():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/categories`);
  }

  addCategory(category):Observable<any> {
    return this.http.post<Category>(`${this.baseUrl}/categories`, category, httpOptions);
  }

  deleteCategory(category):Observable<Category> {
    return this.http.delete<Category>(`${this.baseUrl}/categories/${category.id}`, httpOptions);
  }
}
