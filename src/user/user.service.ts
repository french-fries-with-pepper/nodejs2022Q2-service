import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getAll(){
        return "get all users";
    }
}
