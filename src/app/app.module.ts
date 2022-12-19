import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';

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
import { LinkViewerComponent } from './components/menu/book-table/link-viewer/link-viewer.component';



import {ButtonModule} from 'primeng/button';

import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { CategoryComponent } from './components/category/category.component';
import { DomainComponent } from './components/domain/domain.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { CategoryService } from './components/category/service/category.service';
import { HttpClientModule } from '@angular/common/http';
import { DomainService } from './components/domain/service/domain.service';
import { PublisherService } from './components/publisher/service/publisher.service';
import { BookDetailsComponent } from './components/menu/book-details/book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    DomainComponent,
    PublisherComponent,

    MenuComponent,
    ReportComponent,
    SearchBarComponent,
    StudentBookTableComponent,
    BookTableComponent
  LinkViewerComponent,
  BookDetailsComponent
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
    FormsModule,
    MenubarModule,
    HttpClientModule,
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
    CategoryService,
    DomainService,
    PublisherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
