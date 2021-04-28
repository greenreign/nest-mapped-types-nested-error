import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LevelsResolver } from './levels.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: false,
      playground: false,
    }),
  ],
  providers: [LevelsResolver],
})
export class AppModule {}
