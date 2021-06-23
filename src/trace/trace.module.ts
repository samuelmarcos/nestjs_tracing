import { Module } from '@nestjs/common';
import { TracingModule } from '@dollarsign/nestjs-jaeger-tracing';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [TracingModule.forRoot({
      exporterConfig: {
        serviceName: 'users-service',
      },
      isSimpleSpanProcessor: true,
    }),
    ClientsModule.register([
      {
        name: 'plano_carreira',
        transport: Transport.TCP,
        options: {
          port: 3001,
          ...TracingModule.getParserOptions(),
        },
      },
    ]),
    TracingModule,
    TraceModule
    ],
    controllers: [],
    providers: [],
  })
export class TraceModule {}
