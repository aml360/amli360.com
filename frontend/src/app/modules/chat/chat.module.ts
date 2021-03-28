import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { WebsocketService } from 'src/app/services/websocket-service.service';

@NgModule({
	declarations: [ChatComponent],
	imports: [CommonModule, FormsModule],
	exports: [ChatComponent],
	providers: [WebsocketService],
})
export class ChatModule {}
