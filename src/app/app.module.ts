import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioSnapshotComponent } from './components/portfolio/portfolio-snapshot/portfolio-snapshot.component';
import { PortfolioTrendsComponent } from './components/portfolio/portfolio-trends/portfolio-trends.component';
import { PortfoliSnapshotDetailsComponent } from './components/portfolio/portfolio-snapshot/portfoli-snapshot-details/portfoli-snapshot-details.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HeaderRightNavBarComponent } from './components/header/header-right-nav-bar/header-right-nav-bar.component';
import { SidebarHeaderComponent } from './components/sidebar/sidebar-header/sidebar-header.component';
import { SidebarPropertiesComponent } from './components/sidebar/sidebar-properties/sidebar-properties.component';
import { PortfolioHeaderComponent } from './components/portfolio/portfolio-header/portfolio-header.component';
import { PortfolioSnapshotResearchComponent } from './components/portfolio/portfolio-snapshot/portfolio-snapshot-research/portfolio-snapshot-research.component';
import { PortfolioSnapshotReviewComponent } from './components/portfolio/portfolio-snapshot/portfolio-snapshot-review/portfolio-snapshot-review.component';
import { PortfolioSnapshotTableComponent } from './components/portfolio/portfolio-snapshot/portfolio-snapshot-table/portfolio-snapshot-table.component';
import { SidebarPropertiesItemComponent } from './components/sidebar/sidebar-properties/sidebar-properties-item/sidebar-properties-item.component';
import { SnapshotTableItemComponent } from './components/portfolio/portfolio-snapshot/portfolio-snapshot-table/snapshot-table-item/snapshot-table-item.component';
import { SidebarPropertiesTooltipComponent } from './components/sidebar/sidebar-properties/sidebar-properties-tooltip/sidebar-properties-tooltip.component';
import { PortfolioStateService } from './services/state/portfolio-state.service';
@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		HeaderComponent,
		PortfolioComponent,
		PortfolioSnapshotComponent,
		PortfolioTrendsComponent,
		PortfoliSnapshotDetailsComponent,
		HeaderLogoComponent,
		HeaderRightNavBarComponent,
		SidebarHeaderComponent,
		SidebarPropertiesComponent,
		PortfolioHeaderComponent,
		PortfolioSnapshotResearchComponent,
		PortfolioSnapshotReviewComponent,
		PortfolioSnapshotTableComponent,
		SidebarPropertiesItemComponent,
		SnapshotTableItemComponent,
		SidebarPropertiesTooltipComponent,
	],
	imports: [BrowserModule, HttpClientModule],
	providers: [PortfolioStateService],
	bootstrap: [AppComponent],
})
export class AppModule {}
