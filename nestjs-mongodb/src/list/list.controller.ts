import { Req } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ParseObjectIdPipe } from 'src/utilities/parse-object-id-pipe.pipe';

@Controller('list')
@ApiTags('list')
export class listController {
  constructor(private readonly listService: ListService) {}

  @Post()
  create(@Body() createlistDto: CreateListDto) {
    return this.listService.create(createlistDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.listService.findAll(request);
  }

  @Get(':categoria')
  findOne(@Param('categoria', ParseObjectIdPipe) categoria: string) {
    return this.listService.findOne(categoria);
  }

  @Patch(':categoria')
  update(
    @Param('categoria', ParseObjectIdPipe) categoria: string,
    @Body() updateListDto: UpdateListDto,
  ) {
    return this.listService.update(categoria, updateListDto);
  }

  @Delete(':categoria')
  remove(@Param('categoria', ParseObjectIdPipe) categoria: string) {
    return this.listService.remove(categoria);
  }
}
