import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toogleTooltip() {
    this.show = !this.show;
    console.log(this.show);
  }
}
