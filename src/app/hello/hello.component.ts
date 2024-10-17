
import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent implements OnInit {

  constructor(
    private responsive: BreakpointObserver
  ) { }

  ngOnInit(): void {

    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {

        if (result.matches) {
        }

      });
  }
}
