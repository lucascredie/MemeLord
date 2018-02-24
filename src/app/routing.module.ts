import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//destination components
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  //create routes
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path: 'user', component: UserProfileComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
