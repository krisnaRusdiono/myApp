import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RestrictedComponent } from './components/restricted/restricted.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: 'office', 
    loadChildren: () => import('./modules/office/office.module').then(m => m.OfficeModule) 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'restricted', 
    component: RestrictedComponent,
    canActivate: [
      authGuard
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
