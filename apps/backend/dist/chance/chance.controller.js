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
exports.ChanceController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const chance_service_1 = require("./chance.service");
const create_chance_dto_1 = require("./dto/create-chance.dto");
const update_chance_dto_1 = require("./dto/update-chance.dto");
let ChanceController = class ChanceController {
    constructor(chanceService) {
        this.chanceService = chanceService;
    }
    create(createChanceDto) {
        return this.chanceService.create(createChanceDto);
    }
    findAll() {
        return this.chanceService.findAll();
    }
    findOne(id) {
        return this.chanceService.findOne(id);
    }
    update(updateChanceDto) {
        return this.chanceService.update(updateChanceDto.id, updateChanceDto);
    }
    remove(id) {
        return this.chanceService.remove(id);
    }
};
exports.ChanceController = ChanceController;
__decorate([
    (0, microservices_1.MessagePattern)('createChance'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chance_dto_1.CreateChanceDto]),
    __metadata("design:returntype", void 0)
], ChanceController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllChance'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChanceController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneChance'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ChanceController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateChance'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_chance_dto_1.UpdateChanceDto]),
    __metadata("design:returntype", void 0)
], ChanceController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeChance'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ChanceController.prototype, "remove", null);
exports.ChanceController = ChanceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [chance_service_1.ChanceService])
], ChanceController);
//# sourceMappingURL=chance.controller.js.map