import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { LivereachmediaComponent } from './livereachmedia/livereachmedia.component';
const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'livereachmedia', component: LivereachmediaComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }