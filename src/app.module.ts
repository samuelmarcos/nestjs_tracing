import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TraceModule } from './trace/trace.module';

@Module({
  imports: [UsersModule,
  TraceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

