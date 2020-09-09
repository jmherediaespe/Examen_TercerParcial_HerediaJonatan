import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubcategorieManageComponent } from './components/subcategorie-manage/subcategorie-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    SubcategorieManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
