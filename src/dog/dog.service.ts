import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello() {
    return 'WOOF-WOOF';
  }
  public introduce() {
    return 'My name is Rex';
  }
}
