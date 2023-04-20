import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'
// import { environment} from '../environments/environment';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FileuploadComponent } from './component/fileupload/fileupload.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment} from '../environments/environment';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './component/home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    FileuploadComponent,
    HomeComponent
  ],
  imports: [  MatFormFieldModule, MatPaginatorModule,ReactiveFormsModule,Ng2SearchPipeModule,NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],  
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }