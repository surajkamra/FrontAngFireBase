import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';
import { FirebaseService } from './Services/firebase/firebase.service';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { ListingComponent } from './listing/listing.component';
import { JobComponent } from './job/job.component';
import { BookComponent } from './book/book.component';
import { TicketComponent } from './ticket/ticket.component';
import { CastalComponent } from './castal/castal.component';
import { CreateSpaceComponent } from './create-space/create-space.component';
import { SuzukiRoomComponent } from './suzuki-room/suzuki-room.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    ListingComponent,
    JobComponent,
    BookComponent,
    TicketComponent,
    CastalComponent,
    CreateSpaceComponent,
    SuzukiRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule,
     AppRoutingModule,
     AngularFireAuthModule,
     AngularFireFunctionsModule,
     AngularFireDatabaseModule
  ],
  providers: [FirebaseService,AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
