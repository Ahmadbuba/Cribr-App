import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { DataProviderService } from '../shared/data-provider.service';
import { Property } from '../shared/property.model';

interface PropertyResponse {
  count: number;
  next: string;
  previous: string;
  results: Property[];
}

@Injectable({
  providedIn: 'root',
})
export class OffCampusResolver implements Resolve<any> {
  constructor(
    private dataService: DataProviderService,
    private http: HttpClient
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log('Resolver ....');
    return this.dataService.getAllProperties();
  }

  // fetch() {
  //   this.dataService
  //     .getAllProperties('https://cribr.up.railway.app/api/properties/')
  //     subscribe((properties) => {
  //       const property = properties;
  //       ret
  //     });
  // }.
}
