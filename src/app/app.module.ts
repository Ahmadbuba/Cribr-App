import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyTemplateComponent } from './shared/body-template/body-template.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { OffCampusComponent } from './off-campus/off-campus.component';
import { PropertiesComponent } from './properties/properties.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { CarouselComponent } from './shared/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyTemplateComponent,
    NavigationComponent,
    FooterComponent,
    NavComponent,
    OffCampusComponent,
    PropertiesComponent,
    AuctionsComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
