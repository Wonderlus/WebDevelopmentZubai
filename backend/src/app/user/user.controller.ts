import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { IdDto } from 'src/dto/common.dto';
import { UserCreateDto, UserLoginRequestDto } from 'src/dto/user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUser(@Param() dto: IdDto) {
    return this.userService.getUser(dto);
  }

  @Post('login')
  async authLogin(@Body() dto: UserLoginRequestDto) {
    const user = await this.userService.login(dto);
    return this.userService.generateToken(user);
  }

  @Post('register')
  async authRegister(@Body() dto: UserCreateDto) {
    const user = await this.userService.register(dto);
    return this.userService.generateToken(user);
  }

  @Post('logout')
  authLogout() {
    return this.userService.logout();
  }
}
