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
    return this.listService.findAll(); 
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listService.findOne(id); 
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return this.listService.update(id, updateListDto); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listService.remove(id); 
  }
}