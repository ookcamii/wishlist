import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { list, listDocument } from './schemas/list.schema';
import { Model } from 'mongoose';

@Injectable()
export class ListService {
  constructor( 
    @InjectModel(list.name) private readonly listModel: Model<listDocument>, 
  ) {}

  async create(createBookDto: CreateListDto): Promise<list> { 
    return this.listModel.create(createBookDto); 
  }

  async findAll(): Promise<list[]> { 
    return this.listModel.find().exec();
  }

  async findOne(id: string): Promise<list> { 
    return this.listModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateBookDto: UpdateListDto): Promise<list> { 
    return this.listModel.findOneAndUpdate({ _id: id }, updateBookDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.listModel.findByIdAndRemove({ _id: id }).exec(); 
  }
}