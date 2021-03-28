import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Title } from '@angular/platform-browser';

const routes: Routes = [{ path: '', component: AboutMeComponent }];

@NgModule({
	declarations: [AboutMeComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
	providers: [Title],
})
export class AboutMeModule {}
