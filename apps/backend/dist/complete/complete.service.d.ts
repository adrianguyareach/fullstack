import { CreateCompleteDto } from './dto/create-complete.dto';
import { UpdateCompleteDto } from './dto/update-complete.dto';
export declare class CompleteService {
    create(createCompleteDto: CreateCompleteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCompleteDto: UpdateCompleteDto): string;
    remove(id: number): string;
}
