import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'services', loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule) }, { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) }, { path: 'enterprise', loadChildren: () => import('./pages/enterprise/enterprise.module').then(m => m.EnterpriseModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
