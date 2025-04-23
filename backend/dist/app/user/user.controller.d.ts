import { UserService } from './user.service';
import { IdDto } from 'src/dto/common.dto';
import { UserCreateDto, UserLoginRequestDto } from 'src/dto/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(dto: IdDto): Promise<import("src/dto/user.dto").UserDto>;
    authLogin(dto: UserLoginRequestDto): Promise<import("src/dto/user.dto").UserLoginResponseDto>;
    authRegister(dto: UserCreateDto): Promise<import("src/dto/user.dto").UserLoginResponseDto>;
    authLogout(): Promise<void>;
}
