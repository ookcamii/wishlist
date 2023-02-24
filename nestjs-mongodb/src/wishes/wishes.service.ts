import { Injectable } from '@nestjs/common';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { wishes, WishDocument } from './schemas/wish.schema';
import { Request } from 'express';

@Injectable()
export class WishesService {
  constructor(
    @InjectModel(wishes.name) private readonly wishesModel: Model<WishDocument>,
  ) {}

  async create(createWishesDto: CreateWishDto): Promise<wishes> {
    return this.wishesModel.create(createWishesDto);
  }

  async findAll(request: Request): Promise<wishes[]> {
    return this.wishesModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(deseo: string): Promise<wishes> {
    return this.wishesModel.findOne({ _deseo: deseo }).exec();
  }

  async update(deseo: string, updateWishDto: UpdateWishDto) {
    return this.wishesModel.findOneAndUpdate({ _deseo: deseo }, UpdateWishDto, {
      new: true,
    });
  }

  async remove(deseo: string) {
    return this.wishesModel.findByIdAndRemove({ _deseo: deseo }).exec();
  }
}
