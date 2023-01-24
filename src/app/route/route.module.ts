import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { PropertySnapshotComponent } from '../components/property-snapshot/property-snapshot.component';

const routes: Routes = [
	{
		path: '',
		component: PortfolioComponent,
	},
	{
		path: 'property-snapshot/:id',
		component: PropertySnapshotComponent,
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouteRoutingModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class RouteModule {}
