import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: '@appModules/home/home.module#HomeModule'
    // loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule)
  },
  // { path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
