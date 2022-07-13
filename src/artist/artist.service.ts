import { Injectable } from '@nestjs/common';

@Injectable()
export class ArtistService {
  getAll(): string {
    return 'get all artists';
  }
}
