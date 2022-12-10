import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('good!');
    const { authorization } = req.headers;
    if (authorization)
      throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN);

    next();
  }
}
