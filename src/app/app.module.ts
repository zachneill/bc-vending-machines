import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MachineButtonComponent } from './machine-button/machine-button.component';
import { BarComponent } from './bar/bar.component';
import { SupplyDisplayComponent } from './supply-display/supply-display.component';
import { PageComponent } from './page/page.component';
@NgModule({
  declarations: [
    AppComponent,
    MachineButtonComponent,
    BarComponent,
    SupplyDisplayComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
