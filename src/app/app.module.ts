import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CategoryComponent} from "./components/category/category.component";
import {DomainComponent} from "./components/domain/domain.component";
import {PublisherComponent} from "./components/publisher/publisher.component";
import {MenuComponent} from "./components/menu/menu.component";
import {ReportComponent} from "./components/report/report.component";
import {SearchBarComponent} from "./components/report/search-bar/search-bar.component";
import {StudentBookTableComponent} from "./components/report/student-book-table/student-book-table.component";
import {BookTableComponent} from "./components/menu/book-table/book-table.component";
import {LinkViewerComponent} from "./components/menu/book-table/link-viewer/link-viewer.component";
import {BookDetailsComponent} from "./components/menu/book-details/book-details.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {HttpClientModule} from "@angular/common/http";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {PaginatorModule} from "primeng/paginator";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {StudentService} from "./services/student.service";
import {DomainService} from "./components/domain/service/domain.service";
import {CategoryService} from "./components/category/service/category.service";
import {PublisherService} from "./components/publisher/service/publisher.service";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";


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
    BookTableComponent,
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
    ReactiveFormsModule,
    TableModule,
    RippleModule,
    PaginatorModule,
    AppRoutingModule,

    FormsModule,
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
    { provide: MatDialogRef, useValue: {} },
    CategoryService,
    DomainService,
    PublisherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
