import { UserDto } from 'src/dto/user.dto';
import { UserEntity } from 'src/models/user.entity';

export class MapperUser {
  static toDto(u: UserEntity): UserDto {
    return {
      id: u.id,
      login: u.login,
      first: u.first,
      last: u.last,
    };
  }
}
