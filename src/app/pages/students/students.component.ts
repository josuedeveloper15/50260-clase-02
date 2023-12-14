import { Component } from '@angular/core';
import { MyCardComponent } from '../../shared/components/my-card/my-card.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [MyCardComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  students = [
    {
      nombre: 'Naruto',
      apellido: 'Uzumaki',
    },
    {
      nombre: 'Sasuke',
      apellido: 'Uchiha',
    },
  ];
}
