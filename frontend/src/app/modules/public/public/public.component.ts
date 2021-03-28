import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-public',
	templateUrl: './public.component.html',
	styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit {
	constructor(private titleService: Title) {}

	ngOnInit(): void {
		this.titleService.setTitle('Inicio | Adrián Molina');
	}
}
