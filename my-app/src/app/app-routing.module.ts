import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { LivereachmediaComponent } from './livereachmedia/livereachmedia.component';
import { RmgComponent } from './rmg/rmg.component';
import { BlackKnightsComponent } from './black-knights/black-knights.component';
const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'projects/livereachmedia', component: LivereachmediaComponent},
  { path: 'projects/rmg', component: RmgComponent},
  { path: 'projects/black-knights', component: BlackKnightsComponent},
  { path: '**', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }