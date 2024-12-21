import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LoggingMiddleware } from './middlewares/logging.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rahul_v:yehqqQ89q1FE2Ay3@cluster0.vhrkx.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
