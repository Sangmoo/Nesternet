import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // localhost:8000/cats/hello/id/name -> Hello!
  @Get('hello/:id/:name')
  getHello(
    @Req() req: Request,
    @Body() body,
    @Param() param: { id: string; name: string },
  ): string {
    // console.log(req);
    // console.log(param);
    // return 'Hello!';
    return this.appService.getHello();
  }
}
