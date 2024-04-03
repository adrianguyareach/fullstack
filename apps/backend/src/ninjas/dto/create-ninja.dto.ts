import { IsEnum, IsInt, IsNotEmpty, minLength } from "class-validator";

export class CreateNinjaDto {
  name: string;

  @IsNotEmpty()
  age: number;

  @IsInt()
  id: number;

  @IsEnum(["shuriken", "katana", "nunchaku"], {message: "Invalid weapon"})
  weapon?: string;
}
