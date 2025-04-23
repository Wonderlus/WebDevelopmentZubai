import { IdDto } from './common.dto';
export declare class UserDto extends IdDto {
    readonly login: string;
    readonly first: string;
    readonly last?: string;
}
declare const UserCreateDto_base: import("@nestjs/common").Type<Omit<UserDto, "id">>;
export declare class UserCreateDto extends UserCreateDto_base {
    readonly password: string;
}
declare const UserUpdateDto_base: import("@nestjs/common").Type<Partial<Omit<UserDto, "id" | "login">>>;
export declare class UserUpdateDto extends UserUpdateDto_base {
}
export declare class UserLoginRequestDto {
    readonly login: string;
    readonly password: string;
}
export declare class UserLoginResponseDto extends IdDto {
    readonly token: string;
}
export declare class UserPasswordDto {
    readonly password: string;
}
export {};
