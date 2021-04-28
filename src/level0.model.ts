import { InputType, OmitType } from '@nestjs/graphql';
import { Level1 } from './level1.model';

@InputType()
export class Level0 extends OmitType(Level1, ['id'], InputType) {}
