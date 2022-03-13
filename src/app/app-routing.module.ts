import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  {
    path: '', redirectTo:"/devices", pathMatch:"full"
    
  },
  {
    path: 'devices',
    component: DevicesComponent
  },
  {
    path: 'devices/:id',
    component: DetailComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
