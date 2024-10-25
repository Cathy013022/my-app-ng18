import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-hello",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hello.component.html",
  styleUrl: "./hello.component.scss",
})
export class HelloComponent implements OnInit {
  isportal = false;
  istablet = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive
      .observe([Breakpoints.XSmall, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          //最大寬度600 手機
          this.isportal = false;
          this.istablet = false;
        } else if (result.breakpoints[Breakpoints.XLarge]) {
          //最小寬度1920 電腦
          this.isportal = true;
          this.istablet = false;
        } else {
          //平板
          this.isportal = false;
          this.istablet = true;
        }
      });
  }
}
