import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
	constructor(private titleService: Title) {}
	ngOnInit(): void {
		this.titleService.setTitle('Sobre mí | Adrián Molina');
	}
}
