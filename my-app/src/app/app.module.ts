import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { LivereachmediaComponent } from './livereachmedia/livereachmedia.component';
import { RmgComponent } from './rmg/rmg.component';
import { BlackKnightsComponent } from './black-knights/black-knights.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    LivereachmediaComponent,
    RmgComponent,
    BlackKnightsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
