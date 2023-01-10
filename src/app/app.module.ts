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
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogModule as MatDialogModule, MatLegacyDialogRef as MatDialogRef} from "@angular/material/legacy-dialog";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from "@angular/material/legacy-autocomplete";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyChipsModule as MatChipsModule} from "@angular/material/legacy-chips";
import {Routes} from "@angular/router";
import {BookListComponent} from "./books/components/book-list/book-list.component";
import {CalendarModule} from "primeng/calendar";
import {SliderModule} from "primeng/slider";
import {DialogModule} from "primeng/dialog";
import {MultiSelectModule} from "primeng/multiselect";
import {ContextMenuModule} from "primeng/contextmenu";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";
import {ProgressBarModule} from "primeng/progressbar";
import {BooksModule} from "./books/books.module";
import {BookComponent} from "./books/components/book/book.component";
import {BookService} from "./books/service/book.service";
import {MessageService} from "primeng/api";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  {path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PopupComponent,
    CategoryComponent,
    DomainComponent,
    PublisherComponent,

    MenuComponent,
    ReportComponent,
    SearchBarComponent,
    StudentBookTableComponent,
    BookTableComponent,
  LinkViewerComponent,
  BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DynamicDialogModule,

    BooksModule,
    RouterModule.forRoot(routes),
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
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    DynamicDialogModule,
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
    PublisherService,
    BookService,DialogService, MessageService, PopupComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent],
})
export class AppModule {
}
