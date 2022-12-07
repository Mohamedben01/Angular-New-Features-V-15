import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', title: 'Home Page', loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent) },
  { path: 'contacts', title: 'Contacts Page', loadComponent: () => import('./features/contacts/contacts.component').then(c => c.ContactsComponent) },
  { path: 'services', loadChildren: () => import('./features/services/services.module').then(m => m.ServicesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
