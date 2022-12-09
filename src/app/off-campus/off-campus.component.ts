import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-off-campus',
  templateUrl: './off-campus.component.html',
  styleUrls: ['./off-campus.component.scss'],
})
export class OffCampusComponent implements OnInit, OnDestroy {
  properties: any;
  mySub: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.mySub = this.activatedRoute.data.subscribe((data: Data) => {
      this.properties = data['props'];
      console.log(this.properties);
    });
  }

  ngOnDestroy() {
    if (this.mySub) {
      this.mySub.unsubscribe();
    }
  }
}
