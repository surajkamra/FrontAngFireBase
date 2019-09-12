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


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent
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
