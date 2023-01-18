import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-properties',
  templateUrl: './sidebar-properties.component.html',
  styleUrls: ['./sidebar-properties.component.css'],
})
export class SidebarPropertiesComponent {
  sideBarProperties = [
    {
      id: 1,
      region: 'ABILENE, TX',
      property: 'Sedona Apartments',
    },
    {
      id: 2,
      region: 'ALBANY, GA',
      property: 'Friar Tuck',
    },
    {
      id: 3,
      region: 'ALBUQUERQUE, NM',
      property: 'Ario Apartments',
    },
    {
      id: 4,
      region: 'ANN, ARBOR, MI',
      property: 'Casa Tierra',
    },
    {
      id: 5,
      region: 'ASHEVILLE, VC',
      property: 'Burton Hills',
    },
    {
      id: 6,
      region: 'ATHENS, GA',
      property: 'The cottages at Lexington',
    },
    {
      id: 7,
      region: 'ATLANTA, GA',
      property: '17th Street Lofts',
    },
    {
      id: 8,
      region: 'AUGUSTA, GA',
      property: 'Village Square at Olde Town',
    },
    {
      id: 9,
      region: 'AUSTIN, TX',
      property: '44 South',
    },
    {
      id: 10,
      region: 'BALTIMORE, MD',
      property: '1305 Dock Street',
    },
  ];

  // define a action event whenever you click a button to show its department
}
