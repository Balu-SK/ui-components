import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteModule } from "./router";
import { SharedModule } from '@fourkites/frontend-client-shared-module';
import { environment } from '../environments/environment'
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { SelectComponent } from './components/select/select.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectComponent,
    ConfirmDialogComponent,
    DateSelectorComponent,
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    MatButtonModule,
    NgSelectModule,
    RouteModule,
    SharedModule.forRoot({environment}),
    TranslateModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
