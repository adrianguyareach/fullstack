import { Injectable } from '@nestjs/common';
import { CreateFullDto } from './dto/create-full.dto';
import { UpdateFullDto } from './dto/update-full.dto';

@Injectable()
export class FullService {
  create(createFullDto: CreateFullDto) {
    return 'This action adds a new full';
  }

  findAll() {
    return `This action returns all full`;
  }

  findOne(id: number) {
    return `This action returns a #${id} full`;
  }

  update(id: number, updateFullDto: UpdateFullDto) {
    return `This action updates a #${id} full`;
  }

  remove(id: number) {
    return `This action removes a #${id} full`;
  }
}
