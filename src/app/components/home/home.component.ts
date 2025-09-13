import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books = [{ title: 'Book 1', author: 'Author 1' }, { title: 'Book 2', author: 'Author 2' }];
}