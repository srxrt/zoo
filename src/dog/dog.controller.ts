import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, Response } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello() {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public introduce(@Param('id') id: string, @Query() query: any): string {
    console.log('id', id);
    console.log('query', query);
    return this.dogService.introduce();
  }
  @Post('greet/edit')
  public modifyDetail(@Body() body: any): string {
    console.log('body', body);
    return this.dogService.modifyDetail();
  }
}
