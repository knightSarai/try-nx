import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import {MatNativeDateModule, } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { CoreDataModule} from '@try-nx/core-data';
import { CoreStateModule} from '@try-nx/core-state';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetDetialsComponent } from './widgets/widget-detials/widget-detials.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetialsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    CoreDataModule,
    CoreStateModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
