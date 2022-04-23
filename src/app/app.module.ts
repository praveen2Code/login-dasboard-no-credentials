import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BotFoundComponent } from './components/bot-found/bot-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './modules/components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { AboutComponent } from './modules/components/about/about.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { ServicesComponent } from './modules/components/services/services.component';
import { HomeComponent } from './modules/components/home/home.component';
import { ContactComponent } from './modules/components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    BotFoundComponent,
    AdminDashboardComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
