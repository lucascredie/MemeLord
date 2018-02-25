
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module'

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AngularFireStorageModule } from 'angularfire2/storage';
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { MemeService } from './services/meme.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    UserProfileComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'meme-lord'),
    AngularFirestoreModule,
    RoutingModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [
    UserService,
    MemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
