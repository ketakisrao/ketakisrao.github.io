import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LabComponent } from './pages/lab/lab.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Ketaki Rao | Engineering & Artistry' },
  { path: 'lab', component: LabComponent, title: 'The Laboratory | Ketaki Rao' },
  { path: 'blog', component: BlogComponent, title: 'The Journal | Ketaki Rao' },
  { path: 'hobbies', component: HobbiesComponent, title: 'Tactile Explorations | Ketaki Rao' },
  { path: '**', redirectTo: '' }
];
