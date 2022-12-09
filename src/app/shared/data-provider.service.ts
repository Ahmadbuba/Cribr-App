import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from './property.model';

interface PropertyResponse {
  count: number;
  next: string;
  previous: string;
  results: Property[];
}

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor(private http: HttpClient) {}

  getAllProperties(fetchUrl: string) {
    return this.http.get(fetchUrl);
  }
}
