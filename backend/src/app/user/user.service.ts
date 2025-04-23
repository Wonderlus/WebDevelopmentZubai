import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { IdDto } from 'src/dto/common.dto';
import {
  UserCreateDto,
  UserDto,
  UserLoginRequestDto,
  UserLoginResponseDto,
} from 'src/dto/user.dto';
import { MapperUser } from 'src/mapper/user.mapper';
import { UserEntity } from 'src/models/user.entity';
import { DataSource, ILike } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly dataSource: DataSource,
  ) {}

  private get manager() {
    return this.dataSource.manager;
  }

  async getUser(dto: IdDto) {
    const userEntity = await this.manager.findOneBy(UserEntity, {
      id: dto.id,
    });

    if (!userEntity) {
      throw new UnprocessableEntityException('User not found');
    }

    return MapperUser.toDto(userEntity);
  }

  async login(dto: UserLoginRequestDto) {
    const login = dto.login.trim().toLowerCase();
    const userEntity = await this.manager.findOneBy(UserEntity, {
      login: ILike(login),
    });

    if (!userEntity) {
      throw new UnprocessableEntityException('User not found');
    }

    if (dto.password !== userEntity.password) {
      throw new UnprocessableEntityException('User not authorized');
    }
    return MapperUser.toDto(userEntity);
  }

  async register(dto: UserCreateDto): Promise<UserDto> {
    const login = String(dto.login).toLowerCase();

    const existingUserEntity = await this.manager.findOneBy(UserEntity, {
      login: ILike(login),
    });

    if (existingUserEntity) {
      throw new UnprocessableEntityException('User already exists');
    }

    const userEntity = this.manager.create(UserEntity, {
      ...dto,
      id: randomUUID(),
      login: login,
      password: dto.password,
    });

    const user = await this.manager.save(userEntity);

    return MapperUser.toDto(user);
  }

  async logout() {
    return Promise.resolve();
  }

  async generateToken(dto: UserDto): Promise<UserLoginResponseDto> {
    const token = await this.jwtService.signAsync(
      { login: dto.login },
      { subject: dto.id, secret: process.env.PRIVATE_KEY },
    );

    return {
      id: dto.id,
      token: token,
    };
  }
}
