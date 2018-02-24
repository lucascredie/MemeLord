import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//destination components
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  //create routes
  {path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
