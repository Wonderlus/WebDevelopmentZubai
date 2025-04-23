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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const jwt_1 = require("@nestjs/jwt");
const user_mapper_1 = require("../../mapper/user.mapper");
const user_entity_1 = require("../../models/user.entity");
const typeorm_1 = require("typeorm");
let UserService = class UserService {
    jwtService;
    dataSource;
    constructor(jwtService, dataSource) {
        this.jwtService = jwtService;
        this.dataSource = dataSource;
    }
    get manager() {
        return this.dataSource.manager;
    }
    async getUser(dto) {
        const userEntity = await this.manager.findOneBy(user_entity_1.UserEntity, {
            id: dto.id,
        });
        if (!userEntity) {
            throw new common_1.UnprocessableEntityException('User not found');
        }
        return user_mapper_1.MapperUser.toDto(userEntity);
    }
    async login(dto) {
        const login = dto.login.trim().toLowerCase();
        const userEntity = await this.manager.findOneBy(user_entity_1.UserEntity, {
            login: (0, typeorm_1.ILike)(login),
        });
        if (!userEntity) {
            throw new common_1.UnprocessableEntityException('User not found');
        }
        if (dto.password !== userEntity.password) {
            throw new common_1.UnprocessableEntityException('User not authorized');
        }
        return user_mapper_1.MapperUser.toDto(userEntity);
    }
    async register(dto) {
        const login = String(dto.login).toLowerCase();
        const existingUserEntity = await this.manager.findOneBy(user_entity_1.UserEntity, {
            login: (0, typeorm_1.ILike)(login),
        });
        if (existingUserEntity) {
            throw new common_1.UnprocessableEntityException('User already exists');
        }
        const userEntity = this.manager.create(user_entity_1.UserEntity, {
            ...dto,
            id: (0, crypto_1.randomUUID)(),
            login: login,
            password: dto.password,
        });
        const user = await this.manager.save(userEntity);
        return user_mapper_1.MapperUser.toDto(user);
    }
    async logout() {
        return Promise.resolve();
    }
    async generateToken(dto) {
        const token = await this.jwtService.signAsync({ login: dto.login }, { subject: dto.id, secret: process.env.PRIVATE_KEY });
        return {
            id: dto.id,
            token: token,
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_1.DataSource])
], UserService);
//# sourceMappingURL=user.service.js.map