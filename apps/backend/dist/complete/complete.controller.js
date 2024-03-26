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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteController = void 0;
const common_1 = require("@nestjs/common");
const complete_service_1 = require("./complete.service");
const create_complete_dto_1 = require("./dto/create-complete.dto");
const update_complete_dto_1 = require("./dto/update-complete.dto");
let CompleteController = class CompleteController {
    constructor(completeService) {
        this.completeService = completeService;
    }
    create(createCompleteDto) {
        return this.completeService.create(createCompleteDto);
    }
    findAll() {
        return this.completeService.findAll();
    }
    findOne(id) {
        return this.completeService.findOne(+id);
    }
    update(id, updateCompleteDto) {
        return this.completeService.update(+id, updateCompleteDto);
    }
    remove(id) {
        return this.completeService.remove(+id);
    }
};
exports.CompleteController = CompleteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_complete_dto_1.CreateCompleteDto]),
    __metadata("design:returntype", void 0)
], CompleteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompleteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompleteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_complete_dto_1.UpdateCompleteDto]),
    __metadata("design:returntype", void 0)
], CompleteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompleteController.prototype, "remove", null);
exports.CompleteController = CompleteController = __decorate([
    (0, common_1.Controller)('complete'),
    __metadata("design:paramtypes", [complete_service_1.CompleteService])
], CompleteController);
//# sourceMappingURL=complete.controller.js.map