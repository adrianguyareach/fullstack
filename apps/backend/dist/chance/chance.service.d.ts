import { CreateChanceDto } from './dto/create-chance.dto';
import { UpdateChanceDto } from './dto/update-chance.dto';
export declare class ChanceService {
    create(createChanceDto: CreateChanceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChanceDto: UpdateChanceDto): string;
    remove(id: number): string;
}
