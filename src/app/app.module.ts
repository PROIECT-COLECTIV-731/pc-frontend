import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';


import {BookTableComponent} from "./components/menu/book-table/book-table.component";
import {TableModule} from "primeng/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {CommonModule} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {OrderListModule} from "primeng/orderlist";
import { AppRoutingModule } from './app-routing.module';
import {ReportComponent} from "./components/report/report.component";
import {SearchBarComponent} from "./components/report/search-bar/search-bar.component";
import {StudentService} from "./services/student.service";
import {StudentBookTableComponent} from "./components/report/student-book-table/student-book-table.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ReportComponent,
    SearchBarComponent,
    StudentBookTableComponent,
    BookTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DynamicDialogModule,

    HttpClientModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule,
    RippleModule,
    PaginatorModule,
    AppRoutingModule,

    FormsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,

    MatDialogModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DialogService,
    StudentService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
