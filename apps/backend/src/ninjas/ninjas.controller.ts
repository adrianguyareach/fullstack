import { Controller, Get, Param, Query, Post, Body, Put } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

type Ninja = {
  name: string;
  age: number;
  id: string;
};

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('type') type: string): string[] {
    return [type];
  }
  @Get(':id')
  getOneNinja(@Param('id') id: string): Ninja {
    return {
      name: 'Adrian',
      age: 25,
      id: id,
    };
  }

  @Post()
  CreateNinja(@Body() CreateNinjaDto: CreateNinjaDto) {
    return {
      name: CreateNinjaDto.name,
    };
  }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() UpdateNinjaDto: UpdateNinjaDto) {
    return {
      name: UpdateNinjaDto.name,
    };
  }
}
