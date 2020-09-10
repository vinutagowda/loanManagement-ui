import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl="http://localhost:9999/loan";
  
  constructor(private http:HttpClient) {
    
   }
  
    getLoanDetails(loanNumber: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/num/${loanNumber}`);
    }
    getByFname(firstName: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/name/${firstName}`);
    }
    getByLname(lastName: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/get/${lastName}`);
    }

  }