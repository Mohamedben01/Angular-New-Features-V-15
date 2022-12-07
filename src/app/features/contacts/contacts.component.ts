import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleDirective } from 'src/app/shared/directives/style-directive/style.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StyleDirective
  ],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  color: string = '';
  weight: string = '';
  showAlert() {
    window.alert('Hello Mohamed.')
  }
}
