import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PageComponent } from './nonogram/page-component/page.component';

const routes: Routes = [{ path: 'nonogram', component: PageComponent }];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
	exports: [PageComponent],
	declarations: [PageComponent],
	providers: [],
})
export class GamesModule {}
