import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { PortfolioComponent } from './components/main-content/portfolio/portfolio.component';
import { PortfolioSnapshotComponent } from './components/main-content/portfolio/portfolio-snapshot/portfolio-snapshot.component';
import { PortfolioTrendsComponent } from './components/main-content/portfolio/portfolio-trends/portfolio-trends.component';
import { PortfoliSnapshotDetailsComponent } from './components/main-content/portfolio/portfolio-snapshot/portfoli-snapshot-details/portfoli-snapshot-details.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HeaderRightNavBarComponent } from './components/header/header-right-nav-bar/header-right-nav-bar.component';
import { SidebarHeaderComponent } from './components/sidebar/sidebar-header/sidebar-header.component';
import { SidebarPropertiesComponent } from './components/sidebar/sidebar-properties/sidebar-properties.component';
import { PortfolioHeaderComponent } from './components/main-content/portfolio/portfolio-header/portfolio-header.component';
import { PortfolioSnapshotResearchComponent } from './components/main-content/portfolio/portfolio-snapshot/portfolio-snapshot-research/portfolio-snapshot-research.component';
import { PortfolioSnapshotReviewComponent } from './components/main-content/portfolio/portfolio-snapshot/portfolio-snapshot-review/portfolio-snapshot-review.component';
import { PortfolioSnapshotTableComponent } from './components/main-content/portfolio/portfolio-snapshot/portfolio-snapshot-table/portfolio-snapshot-table.component';
@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		HeaderComponent,
		MainContentComponent,
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
	],
	imports: [BrowserModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
