import { JwtService } from '@nestjs/jwt';
import { IdDto } from 'src/dto/common.dto';
import { UserCreateDto, UserDto, UserLoginRequestDto, UserLoginResponseDto } from 'src/dto/user.dto';
import { DataSource } from 'typeorm';
export declare class UserService {
    private readonly jwtService;
    private readonly dataSource;
    constructor(jwtService: JwtService, dataSource: DataSource);
    private get manager();
    getUser(dto: IdDto): Promise<UserDto>;
    login(dto: UserLoginRequestDto): Promise<UserDto>;
    register(dto: UserCreateDto): Promise<UserDto>;
    logout(): Promise<void>;
    generateToken(dto: UserDto): Promise<UserLoginResponseDto>;
}
