import { Injectable } from '@nestjs/common';

type Ninja = {
  name: string;
  age: number;
  id: number;
  weapon?: string;
};

@Injectable()
export class NinjasService {
  private ninjas: Ninja[] = [
    { name: 'Tracy', age: 25, id: 1, weapon: 'katana' },
    { name: 'Adrian', age: 25, id: 2, weapon: 'nunchuks' },
  ];
  getNinjas(weapon?: 'nunchuks' | 'stars'): Ninja[] {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }
  getOneNinja(id: number): Ninja {
    return this.ninjas.find((ninja) => ninja.id === id);
  }
}
