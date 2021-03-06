import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomersComponent } from './customers/customers.component';
//import { UserService } from './user.service';


@NgModule({

  declarations: [
    AppComponent,
    TopNavigationComponent,
    ProfileComponent,
    CustomersComponent
  ],
  
  imports: [
    BrowserModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
