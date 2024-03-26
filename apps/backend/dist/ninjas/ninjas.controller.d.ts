import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
type Ninja = {
    name: string;
    age: number;
    id: string;
};
export declare class NinjasController {
    getNinjas(type: string): string[];
    getOneNinja(id: string): Ninja;
    CreateNinja(CreateNinjaDto: CreateNinjaDto): {
        name: string;
    };
    updateNinja(id: string, UpdateNinjaDto: UpdateNinjaDto): {
        name: string;
    };
}
export {};
