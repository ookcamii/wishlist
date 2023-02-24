import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@Controller('wishes')
@ApiTags('wish')
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}

  @Post()
  create(@Body() createWishDto: CreateWishDto) {
    return this.wishesService.create(createWishDto);
  }

  @Get()
  async findAll(@Req() request: Request) {
    return this.wishesService.findAll(request);
  }

  @Get(':deseo')
  findOne(@Param('deseo') deseo: string) {
    return this.wishesService.findOne(deseo);
  }

  @Patch(':deseo')
  update(@Param('deseo') deseo: string, @Body() updateWishDto: UpdateWishDto) {
    return this.wishesService.update(deseo, updateWishDto);
  }

  @Delete(':deseo')
  remove(@Param('deseo') deseo: string) {
    return this.wishesService.remove(deseo);
  }
}
