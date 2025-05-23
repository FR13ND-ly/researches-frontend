import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResearchesService {

  http = inject(HttpClient);
  apiUrl = environment.apiUrl + 'researches/';

  createSection (data: any) {
    return this.http.post(`${this.apiUrl}section/`, data);
  }

  getByIssue(issue: any) {
    return this.http.get(`${this.apiUrl}issue/${issue}/`);
  }  

  getById(id: any) {
    return this.http.get(`${this.apiUrl}${id}/`);
  }

  create(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  update(id: any, data: any) {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }

  reorder(id: any, data: any) {
    return this.http.put(`${this.apiUrl}${id}/reorder/`, data);
  }

  delete(id: any) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

  search(query: any, category: any) {
    let params = new URLSearchParams();
    params.append('query', query);
    if (category) {
      params.append('category', category);
    }
    // return this.http.get(`${this.apiUrl}search/${params.toString()}/`);
    return this.http.get(`${this.apiUrl}search/?query=${query}&category=${category}`);
  }
}
