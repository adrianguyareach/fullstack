import { ChanceService } from './chance.service';
import { CreateChanceDto } from './dto/create-chance.dto';
import { UpdateChanceDto } from './dto/update-chance.dto';
export declare class ChanceController {
    private readonly chanceService;
    constructor(chanceService: ChanceService);
    create(createChanceDto: CreateChanceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateChanceDto: UpdateChanceDto): string;
    remove(id: number): string;
}
