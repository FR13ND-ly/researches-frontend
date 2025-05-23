import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  http = inject(HttpClient);
  apiUrl = environment.apiUrl + 'users/';

  getAll() {
    return this.http.get(this.apiUrl);
  }

  create(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  update(id: any, data: any) {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }

  delete(id: any) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
