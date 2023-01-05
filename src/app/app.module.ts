import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookListComponent} from "./books/components/book-list/book-list.component";
import {TableModule} from "primeng/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
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
    PopupComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
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
  providers: [BookService,DialogService, MessageService, PopupComponent],
  //, DomainService, PublisherService
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent],
})
export class AppModule {
}
