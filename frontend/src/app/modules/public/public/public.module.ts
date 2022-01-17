import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Title } from '@angular/platform-browser';

const routes: Routes = [{ path: '', component: PublicComponent }];

@NgModule({
	declarations: [PublicComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
	providers: [Title],
})
export class PublicModule implements OnInit {
	constructor(private titleService: Title) {}

	ngOnInit() {
		this.titleService.setTitle('Inicio | Adrián Molina');
	}
}
