import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  NotFoundException,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas(@Query('weapon') weapon: 'nunchuks' | 'stars'): any[] {
    return this.ninjasService.getNinjas(weapon);
  }
  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number): CreateNinjaDto {
    const ninja = this.ninjasService.getOneNinja(id);
    if (!ninja) {
      throw new NotFoundException();
    }
    return ninja;
  }

  @Post()
  CreateNinja(@Body(new ValidationPipe()) CreateNinjaDto: CreateNinjaDto) {
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
