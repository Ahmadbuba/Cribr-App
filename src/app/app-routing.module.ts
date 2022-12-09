import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionsComponent } from './auctions/auctions.component';
import { OffCampusComponent } from './off-campus/off-campus.component';
import { OffCampusResolver } from './off-campus/off-campus.resolver';
import { PropertiesComponent } from './properties/properties.component';

const routes: Routes = [
  {
    path: '',
    component: OffCampusComponent,
    resolve: { props: OffCampusResolver },
  },
  { path: 'properties', component: PropertiesComponent },
  { path: 'auctions', component: AuctionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
