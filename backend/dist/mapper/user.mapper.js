"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperUser = void 0;
class MapperUser {
    static toDto(u) {
        return {
            id: u.id,
            login: u.login,
            first: u.first,
            last: u.last,
        };
    }
}
exports.MapperUser = MapperUser;
//# sourceMappingURL=user.mapper.js.map