import { Component, ViewChild } from '@angular/core';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { CdkConnectedOverlay } from '@angular/cdk/overlay'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  positions = [
    {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
    },
  ];

  @ViewChild(CdkOverlayOrigin) overlayOrigin!: CdkOverlayOrigin; // 获取按钮元素的引用

  // 控制弹出层的显示和隐藏
  showOverlay = false;

  toggleOverlay() {
    this.showOverlay = !this.showOverlay; // 切换弹出层显示
  }
}
