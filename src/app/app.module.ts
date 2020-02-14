import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component'
import { StatsComponent } from './stats/stats.component';
import { ReportsComponent } from './reports/reports.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'reports', component: ReportsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    StatsComponent,
    ReportsComponent,
    PieChartComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/