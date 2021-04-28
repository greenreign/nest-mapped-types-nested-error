import { Field, ObjectType } from '@nestjs/graphql';
import { Level2 } from './level2.model';

@ObjectType()
export class Level1 {
  @Field()
  id: string;
  @Field(() => [Level2])
  level2s: Level2[];
}
