import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ListPageComponent } from './views/list-page/list-page.component';
import { DetailsPageComponent } from './views/details-page/details-page.component';
import { HeroComponent } from './views/list-page/components/hero/hero.component';
import { TableComponent } from './views/list-page/components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphComponent } from './views/details-page/components/graph/graph.component';
import { NgChartsModule } from 'ng2-charts';
import { ErrorPageComponent } from './views/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPageComponent,
    DetailsPageComponent,
    HeroComponent,
    TableComponent,
    GraphComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
