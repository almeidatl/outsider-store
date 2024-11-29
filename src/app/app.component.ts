import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { HeroComponent } from './core/components/hero/hero.component';
import { SobreComponent } from "./core/components/sobre/sobre.component";

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, SobreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'outsider-store';
}
