import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Tab {
  readonly title: string;
  readonly iconName: string;
  readonly route: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly tabs: Tab[] = [
    {
      title: 'Games',
      iconName: 'casino',
      route: 'games'
    },
    {
      title: 'Materials',
      iconName: 'checklist',
      route: 'materials'
    }
  ];
}
