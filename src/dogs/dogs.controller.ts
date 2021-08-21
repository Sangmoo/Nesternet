import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  // dogs/
  @Get()
  getAllDog() {
    return 'all dog';
  }

  // dogs/id
  @Get(':id')
  getOneDog() {
    return 'one dog';
  }

  @Post()
  createDog() {
    return 'create Cat';
  }

  @Put(':id')
  updateDog() {
    return 'update dog';
  }

  @Patch(':id')
  updatePartialDog() {
    return 'update ';
  }

  @Delete(':id')
  deleteDog() {
    return 'delete dog';
  }
}
