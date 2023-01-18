import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-right-nav-bar',
  templateUrl: './header-right-nav-bar.component.html',
  styleUrls: ['./header-right-nav-bar.component.css'],
})
export class HeaderRightNavBarComponent implements OnInit {
  products = ['BENCHMARK', 'RESEARCH', 'PROFORMA', 'REPORTS', 'SURVEYS'];
  user = 'Aridon';
  constructor() {}
  ngOnInit(): void {}
}
