import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard';
import { BookComponent } from './book/book.component';
import { ListingComponent } from './listing/listing.component';
import { JobComponent } from './job/job.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'book',component:BookComponent,canActivate:[AuthGuard]},
  {path:'list',component:ListingComponent,canActivate:[AuthGuard]},
  {path:'job',component:JobComponent,canActivate:[AuthGuard]},
  {path:'tickets',component:TicketComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
