"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCompleteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_complete_dto_1 = require("./create-complete.dto");
class UpdateCompleteDto extends (0, mapped_types_1.PartialType)(create_complete_dto_1.CreateCompleteDto) {
}
exports.UpdateCompleteDto = UpdateCompleteDto;
//# sourceMappingURL=update-complete.dto.js.map