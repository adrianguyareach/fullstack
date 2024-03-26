"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChanceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_chance_dto_1 = require("./create-chance.dto");
class UpdateChanceDto extends (0, mapped_types_1.PartialType)(create_chance_dto_1.CreateChanceDto) {
}
exports.UpdateChanceDto = UpdateChanceDto;
//# sourceMappingURL=update-chance.dto.js.map