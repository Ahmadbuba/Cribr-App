import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyTemplateComponent } from './shared/body-template/body-template.component';
import { NavigationComponent } from './header/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyTemplateComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
