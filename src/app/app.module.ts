import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, CustomSnackBarComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material';
import { DialogExempleComponent } from './dialog-exemple/dialog-exemple.component';
import { DatatableExempleComponent } from './datatable-exemple/datatable-exemple.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSnackBarComponent,
    DialogExempleComponent,
    DatatableExempleComponent
  ],
  entryComponents: [CustomSnackBarComponent, DialogExempleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
