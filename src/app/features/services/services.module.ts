import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SocialServiceComponent } from './pages/social-service/social-service.component';
import { PersonalServiceComponent } from './pages/personal-service/personal-service.component';
import { BusinessServiceComponent } from './pages/business-service/business-service.component';


@NgModule({
  declarations: [
    ServicesComponent,
    SocialServiceComponent,
    PersonalServiceComponent,
    BusinessServiceComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    NgOptimizedImage
  ]
})
export class ServicesModule { }
