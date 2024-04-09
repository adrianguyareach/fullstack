import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FullService } from './full.service';
import { CreateFullDto } from './dto/create-full.dto';
import { UpdateFullDto } from './dto/update-full.dto';

@Controller('full')
export class FullController {
  constructor(private readonly fullService: FullService) {}

  @Post()
  create(@Body() createFullDto: CreateFullDto) {
    return this.fullService.create(createFullDto);
  }

  @Get()
  findAll() {
    return this.fullService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fullService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFullDto: UpdateFullDto) {
    return this.fullService.update(+id, updateFullDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fullService.remove(+id);
  }
}
