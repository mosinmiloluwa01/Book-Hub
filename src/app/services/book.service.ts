import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl:string= 'https://book-hubs.herokuapp.com/api/v1/books'

  constructor(private http:HttpClient) { }

  getBooks():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  addBook(book):Observable<any> {
    return this.http.post<Book>(`${this.baseUrl}`, book, httpOptions);
  }

  deleteBook(book):Observable<Book> {
    return this.http.delete<Book>(`${this.baseUrl}/${book.id}`, httpOptions);
  }

  updateBook(book):Observable<any> {
    return this.http.put(`${this.baseUrl}/${book.id}`, book, httpOptions)
  }
}