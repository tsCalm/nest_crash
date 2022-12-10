import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return this.userService.fetchUsers();
  }

  @Get(':id')
  // ParseIntPipe가 없으면 string 타입
  getUser(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserByUd(id);
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  @Post('create')
  // 개별적인 validationPipe
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }
}
