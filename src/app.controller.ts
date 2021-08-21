import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { DogsService } from './dogs/dogs.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dogsService: DogsService,
  ) {}

  @Get('hello/:id/:name')
  getHello() {
    return this.appService.getHello();
  }
}
