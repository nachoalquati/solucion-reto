import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientComponent } from './components/client/client.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneComponent } from './components/phone/phone.component';
import { RepairsPhoneComponent } from './components/repairs-phone/repairs-phone.component';
import { RepairComponent } from './components/repair/repair.component';
import { RepairsListComponent } from './components/repairs-list/repairs-list.component';



const appRoutes:Routes=[
 { path:'', component:HomeComponentComponent},
 {path:'clients', component:ClientListComponent},
 {path:'login', component:LoginComponent},
 { path:'phones/:id', component: PhonesComponent },
 { path:'repairs/:id', component: RepairsPhoneComponent },
 { path:'repairs-list', component: RepairsListComponent }
]

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    ClientListComponent,
    ClientComponent,
    HomeComponentComponent,
    PhonesComponent,
    PhoneComponent,
    RepairsPhoneComponent,
    RepairComponent,
    RepairsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
