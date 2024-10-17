
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent implements OnInit {
 
  isportal =true; 

  constructor(
    private responsive: BreakpointObserver
  ) { }

  ngOnInit(): void {

    this.responsive.observe([Breakpoints.HandsetPortrait]) //最大寬度600 
      .subscribe(result => {

        if (result.matches) { 
          this.isportal =false 
        }

      });
  }
}
