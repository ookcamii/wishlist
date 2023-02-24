import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { list, listDocument } from './schemas/list.schema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class ListService {
  constructor(
    @InjectModel(list.name) private readonly listModel: Model<listDocument>,
  ) {}

  async create(createListDto: CreateListDto): Promise<list> {
    return this.listModel.create(createListDto);
  }

  async findAll(request: Request): Promise<list[]> {
    return this.listModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(categoria: string): Promise<list> {
    return this.listModel.findOne({ _categoria: categoria }).exec();
  }

  async update(categoria: string, updateListDto: UpdateListDto): Promise<list> {
    return this.listModel.findOneAndUpdate(
      { _categoria: categoria },
      updateListDto,
      {
        new: true,
      },
    );
  }

  async remove(categoria: string) {
    return this.listModel.findByIdAndRemove({ _categoria: categoria }).exec();
  }
}
