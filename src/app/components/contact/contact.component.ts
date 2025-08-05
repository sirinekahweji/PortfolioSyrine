import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  user = { name: 'Sirine' ,
     email:'sirinekahweji5@gmail.com',
     phone:'(+216)51794724'
  };


}
