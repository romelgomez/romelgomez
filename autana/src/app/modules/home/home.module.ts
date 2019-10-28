import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './components/views/home-view/home-view.component';
import { CoreModule } from '../core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomeViewComponent,
      }
    ],
  },
];


@NgModule({
  declarations: [
    HomeViewComponent,
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
