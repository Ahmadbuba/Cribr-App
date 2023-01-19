import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Property } from '../shared/property.model';

@Component({
  selector: 'app-off-campus',
  templateUrl: './off-campus.component.html',
  styleUrls: ['./off-campus.component.scss'],
})
export class OffCampusComponent implements OnInit, OnDestroy {
  properties: Property[] = [];

  mySub: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.mySub = this.activatedRoute.data.subscribe((data: Data) => {
      let propertyHolder: Property[] = data['props'];
      console.log(Object.values(propertyHolder));
      for (const property of propertyHolder) {
        console.log(property);
        this.properties.push(property);
      }
      console.log(this.properties);
      // const [mr, mrs] = property.images;
      // property.images = mrs;
      // console.log(property.images);
      // this.properties.push(property);

      // this.properties = { ...propertyHolder };
      console.log('Here is the array: ' + this.properties);
    });
  }

  ngOnDestroy() {
    if (this.mySub) {
      this.mySub.unsubscribe();
    }
  }
}
