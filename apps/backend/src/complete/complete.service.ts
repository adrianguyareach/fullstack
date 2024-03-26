import { Injectable } from '@nestjs/common';
import { CreateCompleteDto } from './dto/create-complete.dto';
import { UpdateCompleteDto } from './dto/update-complete.dto';

@Injectable()
export class CompleteService {
  create(createCompleteDto: CreateCompleteDto) {
    return 'This action adds a new complete';
  }

  findAll() {
    return `This action returns all complete`;
  }

  findOne(id: number) {
    return `This action returns a #${id} complete`;
  }

  update(id: number, updateCompleteDto: UpdateCompleteDto) {
    return `This action updates a #${id} complete`;
  }

  remove(id: number) {
    return `This action removes a #${id} complete`;
  }
}
