import { CompressionMiddleware } from '@nest-middlewares/compression';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'angular_dist'),
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		//Modulo que comprime las request con gzip
		CompressionMiddleware.configure({ level: 8 });
		consumer.apply(CompressionMiddleware).forRoutes({ path: '**', method: RequestMethod.ALL });
	}
}
