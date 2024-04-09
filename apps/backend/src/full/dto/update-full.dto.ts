import { PartialType } from '@nestjs/mapped-types';
import { CreateFullDto } from './create-full.dto';

export class UpdateFullDto extends PartialType(CreateFullDto) {}
