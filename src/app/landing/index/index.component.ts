import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { BenefitsComponent } from "../benefits/benefits.component";
import { HowworksComponent } from '../howworks/howworks.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, BenefitsComponent, HowworksComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    
  }
}
