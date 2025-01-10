import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { ExampleComponent } from './example/example.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent, ExampleComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app-ng18';
}
