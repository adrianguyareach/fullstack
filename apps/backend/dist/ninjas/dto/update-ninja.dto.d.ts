import { CreateNinjaDto } from './create-ninja.dto';
declare const UpdateNinjaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateNinjaDto>>;
export declare class UpdateNinjaDto extends UpdateNinjaDto_base {
    id: string;
    name: string;
}
export {};
