import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessServiceComponent } from './pages/business-service/business-service.component';
import { PersonalServiceComponent } from './pages/personal-service/personal-service.component';
import { SocialServiceComponent } from './pages/social-service/social-service.component';
import { ServicesComponent } from './services.component';

export const serviceRoutes: Routes = [
  {
    path: '',
    title: 'Services',
    component: ServicesComponent,
    children: [
      { path: 'business', title: 'Business', component: BusinessServiceComponent },
      { path: 'social', title: 'Social', component: SocialServiceComponent },
      { path: 'personal', title: 'Personal', component: PersonalServiceComponent },
      { path: '', title: 'Business', redirectTo: 'business', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(serviceRoutes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
