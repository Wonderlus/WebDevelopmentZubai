"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPasswordDto = exports.UserLoginResponseDto = exports.UserLoginRequestDto = exports.UserUpdateDto = exports.UserCreateDto = exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_dto_1 = require("./common.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class UserDto extends common_dto_1.IdDto {
    login;
    first;
    last;
}
exports.UserDto = UserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsEmail)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserDto.prototype, "first", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserDto.prototype, "last", void 0);
class UserCreateDto extends (0, swagger_1.OmitType)(UserDto, ['id']) {
    password;
}
exports.UserCreateDto = UserCreateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserCreateDto.prototype, "password", void 0);
class UserUpdateDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(UserDto, ['id', 'login'])) {
}
exports.UserUpdateDto = UserUpdateDto;
class UserLoginRequestDto {
    login;
    password;
}
exports.UserLoginRequestDto = UserLoginRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsEmail)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserLoginRequestDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserLoginRequestDto.prototype, "password", void 0);
class UserLoginResponseDto extends common_dto_1.IdDto {
    token;
}
exports.UserLoginResponseDto = UserLoginResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserLoginResponseDto.prototype, "token", void 0);
class UserPasswordDto {
    password;
}
exports.UserPasswordDto = UserPasswordDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserPasswordDto.prototype, "password", void 0);
//# sourceMappingURL=user.dto.js.map