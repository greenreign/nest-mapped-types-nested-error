import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Level0 } from './level0.model';
import { Level1 } from './level1.model';

@Resolver()
export class LevelsResolver {
  @Mutation(() => Level1)
  public async createLevels(@Args('input') input: Level0) {}
}
