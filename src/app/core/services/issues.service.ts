import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  http = inject(HttpClient);
  apiUrl = environment.apiUrl + 'issues/';

  getById(id: any) {
    return this.http.get(this.apiUrl + id);
  }
  
  getByCategory(category: any) {
    return this.http.get(`${this.apiUrl}categories/${category}/`);
  }

  create(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  update(data: any) {
    return this.http.put(`${this.apiUrl}${data.id}/`, data);
  }

  delete(id: any) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

}
