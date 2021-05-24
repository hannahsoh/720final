import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotoryachtsComponent } from './motoryachts/motoryachts.component';
import { ExperienceComponent } from './experience/experience.component';
import { SportfishComponent } from './sportfish/sportfish.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MotoryachtsComponent,
    ExperienceComponent,
    SportfishComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
    { path: '', pathMatch: 'full', redirectTo: 'motoryachts' },
    { path: 'motoryachts', component: MotoryachtsComponent }, // move all your appcomponent code to this component
    { path: 'sportfish', component: SportfishComponent },
    { path: 'experience', component: ExperienceComponent }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
