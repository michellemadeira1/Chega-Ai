import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    
  }
}
