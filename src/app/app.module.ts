
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module'

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { MemeService } from './services/meme.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'meme-lord'),
    AngularFirestoreModule,
    RoutingModule
  ],
  providers: [
    UserService,
    MemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
