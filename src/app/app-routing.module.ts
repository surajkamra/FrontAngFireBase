import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  //{path: '', loadChildren: 'app/miscellaneous/miscellaneous.module#MiscellaneousModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
