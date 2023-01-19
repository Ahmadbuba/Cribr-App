import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
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
  propertiesUrl = 'https://cribr.up.railway.app/api/properties/';
  constructor(private http: HttpClient) {}

  getAllProperties() {
    return this.http.get<PropertyResponse>(this.propertiesUrl).pipe(
      map((propertyResponse) => {
        return propertyResponse.results;
      })
    );
  }
}
