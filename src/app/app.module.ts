import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';
import { FirebaseService } from './firebase.service';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
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
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
