import { CompleteService } from './complete.service';
import { CreateCompleteDto } from './dto/create-complete.dto';
import { UpdateCompleteDto } from './dto/update-complete.dto';
export declare class CompleteController {
    private readonly completeService;
    constructor(completeService: CompleteService);
    create(createCompleteDto: CreateCompleteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCompleteDto: UpdateCompleteDto): string;
    remove(id: string): string;
}
