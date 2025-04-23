import { UserDto } from 'src/dto/user.dto';
import { UserEntity } from 'src/models/user.entity';
export declare class MapperUser {
    static toDto(u: UserEntity): UserDto;
}
