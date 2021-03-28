import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appSv: AppService) {}
	@Get('test')
	getHello(): string {
		return this.appSv.getHello();
	}
}
