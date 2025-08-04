import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{ 
  currentText: 'fullstack' | 'mobile' = 'fullstack';

  ngOnInit(): void {
    this.cycleText();
  }

  cycleText() {
    setInterval(() => {
      this.currentText = this.currentText === 'fullstack' ? 'mobile' : 'fullstack';
    }, 4000); // 2s d'animation + 2s d'attente
  }
}



