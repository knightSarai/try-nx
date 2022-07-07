import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Widget } from '@try-nx/api-interfaces';


const API_ENDPOINT = 'https://localhost:33333/'

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  model = 'widgets';

  constructor(private http: HttpClient) {}

  private getUrl() {
    return `${API_ENDPOINT}${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<Widget[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Widget>(this.getUrlWithId(id));
  }

  create(widget: Widget) {
    return this.http.post(this.getUrl(), widget);
  }

  update(widget: Widget) {
      return this.http.put(this.getUrlWithId(widget.id ?? ''), widget);
  }

  delete(widget: Widget) {
    return this.http.delete(this.getUrlWithId(widget.id ?? ''));
  }

}
