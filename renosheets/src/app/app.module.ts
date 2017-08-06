import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Dnd35sheetComponent } from './components/dnd35sheet/dnd35sheet.component';

const appRoutes: Routes = [
  {path:'', component: Dnd35sheetComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Dnd35sheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
