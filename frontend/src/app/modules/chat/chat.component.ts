import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket-service.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
	constructor(private ws: WebsocketService) {}
	msg: string;
	mensajes: string[] = [];
	title = 'socketAngular';

	sendMsg() {
		if (!this.msg) {
			return;
		}
		console.log(this.msg);
		this.mensajes.push(this.msg);
		this.msg = undefined;
	}
	ngOnInit() {
		console.log('hola');

		console.log(this.ws.connect());
	}
}
