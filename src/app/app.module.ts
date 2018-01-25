import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({

  declarations: [
    AppComponent,
    TopNavigationComponent,
    ProfileComponent
  ],
  
  imports: [
    BrowserModule
  ],
  
  providers: [
    // Servizi qui
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
