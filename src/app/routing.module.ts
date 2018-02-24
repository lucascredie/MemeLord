import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//destination components
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  //create routes
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
