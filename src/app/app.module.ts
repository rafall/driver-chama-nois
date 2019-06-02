import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterFirstComponent } from './register-first/register-first.component';
import { RegisterSecondComponent } from './register-second/register-second.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './register.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register-first', component: RegisterFirstComponent },
  { path: 'register-second', component: RegisterSecondComponent },
  { path: 'main-screen', component: MainScreenComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterFirstComponent,
    RegisterSecondComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    RegisterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
