import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return {
      name: 'limsm',
      email: 'dlatkdals93@gmail.com',
    };
  }

  @Get(':id')
  // ParseIntPipe가 없으면 string 타입
  getUser(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return id;
  }

  @Post('create')
  // 개별적인 validationPipe
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return 'a';
  }
}
